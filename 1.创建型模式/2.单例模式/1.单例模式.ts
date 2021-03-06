//基本数据类型String Number Undefineds
//引用数据类型Object Function

//对象数据类型的作用
//把描述同一事物（同一个对象）的属性和方法在一个内存空间下，起到了分组的作用，这样不同事物之间的属性即使属性名相同，相互也不会发生冲突
//我们把这种分组编写代码的模式叫做""单例模式"
//在单利模式中我们把preson1或者preson2也叫做“命名空间”
var person1 = {
  name: "yiyi",
  age: "17"
};
var person2 = {
  name: "wew",
  age: "16"
};

//单利模式是一种项目开发中经常使用的模式，因为项目中我们可以使用单利模式来进行“模块化开发”
//“模块化开发”对于一个相对来说比较大的项目，需要多人协作的开发，我们一般情况下会根据当前项目的需求划分成几个功能板块，每个人负责一部分，同事开发，最后把每个人的代码进行合并
//公共模块
var utils = {
  select: function() {}
};
//页卡模块中的change-->实现选项卡切换
var tabRender = {
  change: function() {
    utils.select(); //在自己的命名空间下调用其他命名空间的方法
  }
};
//搜索模块change ->搜索内容变化处理
var searchRender = {
  change: function() {
    this.clickEven(); //在自己的命名空间下调用自己的方法
  },
  clickEven: function() {}
};

/* 惰性思想封装 */
//使用惰性思想（js高级编程）
