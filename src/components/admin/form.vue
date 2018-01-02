<template>
  <div class="admin-missions-form">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item>管理画面</el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">ミッション一覧</a></el-menu-item>
    </el-menu>
    <el-container>
      <el-main>
        <div class="main-content">
          <el-row :gutter="20">
            <el-col :span="3" offset="1">
              <el-tag type="danger" class="f-required">必須</el-tag>
              <label class="f-label">場所名:</label>
            </el-col>
            <el-col :span="12" offset="1">
              <div>
                <el-input placeholder="例: 新宿ゴールデン街" v-model="name"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3" offset="1">
              <el-tag type="danger" class="f-required">必須</el-tag>
              <label class="f-label">画像:</label>
            </el-col>
            <el-col :span="12" offset="1">
              <div>
                <el-upload
                  :auto-upload="false"
                  :on-change='onSelectedFile'
                  :on-remove="handleRemoveImage"
                  :limit="1"
                  :on-exceed="handleOnExceed"
                >
                  <el-button size="small" type="primary">画像を選択</el-button>
                </el-upload>
                <div slot="tip" class="el-upload__tip">jpg/png形式のみアップロードできます</div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3" offset="1">
              <el-tag type="danger" class="f-required">必須</el-tag>
              <label class="f-label">住所:</label>
            </el-col>
            <el-col :span="12" offset="1">
              <div>
                <el-input placeholder="例: 埼玉県さいたま市岩槻西原1-11-5" v-model="address"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3" offset="1">
              <el-tag type="danger" class="f-required">必須</el-tag>
              <label class="f-label">合言葉:</label>
            </el-col>
            <el-col :span="12" offset="1">
              <div>
                <el-input placeholder="例: お酒" v-model="keyword"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" offset="5">
              <el-button @click="onSubmit" class="btn-wrapper" v-loading.fullscreen.lock="fullscreenLoading">送信</el-button>
            </el-col>
          </el-row>
          </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>