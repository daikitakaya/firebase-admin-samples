<template>
  <div id="admin-index">
    <admin-header></admin-header>
    <el-table
    :data="missions"
    style="width: 100%"
    v-loading="loading"
    >
    <el-table-column
      label="場所名"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          {{ scope.row.name }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="合言葉"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="keyword-wrapper">
          {{ scope.row.keyword }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="住所"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="address-wrapper">
          {{ scope.row.address }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="追加日"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">編集</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">削除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import AdminHeader from './AdminHeader'
import firebaseApp from '../../firebaseApp'
const db = firebaseApp.firestore()
const missionsRef = db.collection('missions')

let data = {
  missions: [],
  loading: false
}

export default {
  name: 'AdminIndex',
  components: {
    AdminHeader
  },
  data () {
    return data
  },
  created: function () {
    data.loading = true
    missionsRef.get().then(querySnapshot => {
      querySnapshot.forEach(function (doc) {
        data.missions.push(doc.data())
      })
      data.loading = false
    }).then(() => {
      console.log(data.missions)
    })
  },
  methods: {
    handleEdit: function (index, row) {
      console.log(index, row)
    },
    handleDelete: function (index, row) {
      this.$confirm(`削除すると復元することができません。\n本当に削除しますか？`).then(() => {
        // 削除処理をする
        console.log('yes押された')
      }).catch(() => {
        // 何もしない
        console.log('cancel')
      })
      console.log(index, row)
    }
  }
}
</script>

<style>

</style>
