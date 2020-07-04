

function Pagination(el,option){
    this.el = document.querySelector(el)
    this.pageTag = option.pageTag
    this.pageInfo = option.pageInfo
    this.pageInfo.totalPage = Math.ceil(option.pageInfo.totalData / option.pageInfo.pageSize)
    this.init()        
}
Pagination.prototype.init = function(){
    //创建页面标签
    this.creatPage()
    //创建标签页码
    this.creatPageNum()
    //创建点击事件
    this.clickPage()
}

Pagination.prototype.clickPage = function(){
    this.el.onclick =  (e) => {
        var e = e || window.event
        let val = e.target.innerText
        if(val == this.pageTag.first){
            this.el.innerHTML = ""
            this.pageInfo.pageNum = 1;
            this.creatPage()
            this.creatPageNum()
        }
        if(val == this.pageTag.prev && this.pageInfo.pageNum > 1){
            this.el.innerHTML = ""
            this.pageInfo.pageNum = this.pageInfo.pageNum - 1;
            this.creatPage()
            this.creatPageNum()
        }
        if(Number(val)){
            this.el.innerHTML = ""
            this.pageInfo.pageNum = Number(val);
            this.creatPage()
            this.creatPageNum()
        }
        if(val == this.pageTag.next && this.pageInfo.pageNum < this.pageInfo.totalPage){
            this.el.innerHTML = ""
            this.pageInfo.pageNum = this.pageInfo.pageNum + 1;
            this.creatPage()
            this.creatPageNum()
        }
        if(val == this.pageTag.last){
            this.el.innerHTML = ""
            this.pageInfo.pageNum = this.pageInfo.totalPage;
            this.creatPage()
            this.creatPageNum()
        }
    }
}




Pagination.prototype.creatPage = function(){
    for(key in this.pageTag){
        let pObj = document.createElement("p")
        if(key){
            pObj.innerHTML = this.pageTag[key]
            pObj.style.margin = "0 5px"
            pObj.style.padding = "0 5px"
            pObj.style.border = "1px solid black"
            this.el.appendChild(pObj)
        }
    }
    if(this.pageInfo.pageNum == 1){
        this.el.querySelector("p:nth-of-type(1)").style.background = "#999"
        this.el.querySelector("p:nth-of-type(2)").style.background = "#999"
        this.el.querySelector("p:nth-of-type(1)").style.cursor = "not-allowed"
        this.el.querySelector("p:nth-of-type(2)").style.cursor = "not-allowed"
    }
    if(this.pageInfo.pageNum == this.pageInfo.totalPage){
        this.el.querySelector("p:nth-of-type(4)").style.background = "#999"
        this.el.querySelector("p:nth-of-type(5)").style.background = "#999"
        this.el.querySelector("p:nth-of-type(4)").style.cursor = "not-allowed"
        this.el.querySelector("p:nth-of-type(5)").style.cursor = "not-allowed"
    }
}

Pagination.prototype.creatPageNum = function(){
     divpObj = this.el.querySelector("p:nth-of-type(3)")
     divpObj.style.display = "flex"
     divpObj.style.border = "none"
    if(this.pageInfo.pageNum < 5){
        for(i = 1; i <= 5; i++)this.creatP(i)
        this.creatP("...","span");this.creatP(this.pageInfo.totalPage-1);this.creatP(this.pageInfo.totalPage)
   }else if(this.pageInfo.pageNum == 5){
       for(i = 1; i <= 7; i++)this.creatP(i)
        this.creatP("...","span");this.creatP(this.pageInfo.totalPage-1);this.creatP(this.pageInfo.totalPage)
   }else if(this.pageInfo.pageNum > 5 && this.pageInfo.pageNum < this.pageInfo.totalPage - 4){
       this.creatP(1);this.creatP(2);this.creatP("...","span");
       for(i = this.pageInfo.pageNum -2; i <= this.pageInfo.pageNum +2;i++ )this.creatP(i);
       this.creatP("...","span");this.creatP(this.pageInfo.totalPage-1);this.creatP(this.pageInfo.totalPage)
   }else if(this.pageInfo.pageNum >= this.pageInfo.totalPage - 4){
       this.creatP(1);this.creatP(2);this.creatP("...","span");
       for(i = this.pageInfo.totalPage -4; i <= this.pageInfo.totalPage ;i++ )this.creatP(i);
   }
}

Pagination.prototype.creatP = function(contect,el = "p"){
        let pObj = document.createElement(el)
            pObj.innerHTML = contect
            if(el != "span"){
                pObj.style.margin = "0 5px"
                pObj.style.padding = "0 5px"
                pObj.style.border = "1px solid black"
            }
            divpObj.appendChild(pObj)
    if(contect == this.pageInfo.pageNum) pObj.style.background = "orange"
}
