const base = {
    get() {
        return {
            url : "http://localhost:8080/wuliuguanliwu/",
            name: "wuliuguanliwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wuliuguanliwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "物流管理系统"
        } 
    }
}
export default base
