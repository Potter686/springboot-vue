<template>
    <div>
        <el-form  :model="ruleForm"  :rules="rules" ref="ruleForm" style="width: 50%" class="demo-ruleForm">

            <el-form-item label="编号" prop="id">
                <el-input v-model="ruleForm.id" readOnly></el-input>
            </el-form-item>

            <el-form-item  label="账号" prop="userName">
                <el-input v-model="ruleForm.userName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>

            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id: null,
                    userName: null,

                },
                rules: {
                    // userName: [
                    //     // { required: true, message: '请输入活动名称', trigger: 'blur' },
                    //     // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    // ],
                    userName: [
                        { required: true, message: '请输入信息', trigger: 'change' },
                        { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                    ]

                }
            };
        },
        methods: {

            submitForm(formName) {

                const _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        this.$axios.put('http://127.0.0.1:8181/user/update',_this.ruleForm).then(function (resp) {
                            if (resp.data == 'success'){
                                // alert("添加成功")

                                _this.$message({
                                    showClose: true,
                                    message: ''+_this.ruleForm.userName+'\'的信息修改成功',
                                    type: 'success'
                                });
                                _this.$router.push("/UserManager")
                            }
                        })
                    } else {
                        _this.$message({
                            showClose: true,
                            message: '修改失败',
                            type: 'error'
                        });
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
            const _this = this;
            this.$axios.get('http://127.0.0.1:8181/user/findById/'+this.$route.query.id+'').then(function (resp) {

                _this.ruleForm = resp.data;
            })
        }

    }
</script>

<style scoped>

</style>
