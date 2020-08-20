<template>

    <div>
        <el-table
                :data="tableData"
                border
                :header-cell-style="{background:'#fffaf0',color:'#292421'}"
                >
<!--                style="width: 100%">-->
            <el-table-column
                    fixed
                    prop="id"
                    label="编号">
            </el-table-column>
            <el-table-column
                    prop="userName"
                    label="账号">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="edit( scope.row)">修改</el-button>
                    <el-button size="mini" type="danger"  @click="userDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size= page_size
                :total= total
                @current-change="page">
        </el-pagination>
    </div>

</template>



<!--//router route 跳转 带r 拿参数 用 route-->


<script>
    export default {
        methods: {
            userDelete(row){
                const _this = this;
                this.$axios.delete('http://127.0.0.1:8181/user/deleteById/'+row.id).then(function () {




                    window.location.reload();
                    _this.$message({
                        showClose: true,
                        message: ''+row.userName+'\'删除成功',
                        type: 'success'
                    });


                    // _this.$router.push("/UserManager")

                })


            },

            edit(row) {
                // this.$router.push("/UserUpdate")
                this.$router.push({
                    path:"/UserUpdate",
                    query:{
                        id:row.id
                    }
                })
            },

            page(currentPage){
                const _this = this;
                const page_size = _this.page_size;
                this.$axios.get('http://127.0.0.1:8181/user/findAll/'+currentPage+'/'+page_size).then(function (resp) {
                    console.log(resp);
                    _this.tableData = resp.data.content;
                    _this.total = resp.data.totalElements
                })

            }
        },
        // 页面打开就加载下面的数据
        created() {
            const _this = this;
            const page_size = _this.page_size;
            this.$axios.get('http://127.0.0.1:8181/user/findAll/1/'+page_size+'').then(function (resp) {
                console.log(resp);
                _this.tableData = resp.data.content;
                _this.total = resp.data.totalElements
            })
        },

        data() {
            return {
                page_size:5,
                total:null,
                tableData: null
            }
        }
    }
</script>
