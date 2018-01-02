<template>
  <div id="admin-new">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
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
                <el-upload :on-change='onSelectedFile'>画像を選択</el-upload>
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
              <el-button @click="onSubmit" class="btn-wrapper">送信</el-button>
            </el-col>
          </el-row>
          </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import firebaseApp from '../../firebaseApp'
const db = firebaseApp.firestore()
const missionsRef = db.collection('missions')
const storageRef = firebaseApp.storage().ref()

let data = {
  name: '',
  uploadFile: '',
  address: '',
  image_url: '',
  keyword: '',
  lng: 0.0,
  lat: 0.0

}

function clearData () {
  data.name = ''
  data.uploadFile = ''
  data.address = ''
  data.image_url = ''
  data.keyword = ''
}

export default {
  name: 'AdminNew',
  data () {
    return data
  },
  created () {
  },
  methods: {
    onSubmit: function () {
      missionsRef.add({ name: data.name, address: data.address, keyword: data.keyword
      }).then(doc => {
        const filePath = `images/${doc.id}/${data.uploadFile.name}`
        console.log(filePath)
        storageRef.child(filePath).put(data.uploadFile.raw).then(snapshot => {
          doc.update({image_url: snapshot.downloadURL})
          clearData()
        })
      })
    },
    onSelectedFile: function (file, fileList) {
      data.uploadFile = file
      console.log(data.uploadFile)
    }
  }
}
</script>

<style>

  #admin-new {
    background-color: #f6f6f6;
  }

  .main-content {
    margin-top: 15px;
    margin-right: 80px;
    margin-left: 80px;
    padding: 30px;
    background-color: #fff;
  }

  .f-label {
    font-weight: 200;
    margin-left: 2px;
  }

  .f-required {
    text-align: center;
    margin-left: 10px;
  }

  .demo-input-label {
    display: inline-block;
    width: 130px;
  }


  .btn-wrapper {
    float: right;
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
</style>