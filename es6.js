/**
 * 字符串扩展
 * 1、模板字符串，用反引号(`),并${}->里面可以插入任何js表达式,在javascript中会进行模板编译
 * 2、标签模板,模板字符串紧跟在一个函数名后面
 * 3、String新增方法,includes(),startsWith(),endsWith(),repeat()->表示将原字符串重复n次,padStart(),padEnd()字符串补全功能,matchAll()
 * 4、
 */

 /**
  * 正则表达式
  * 1、正则表达式创建:一、使用正则表达式字面量，包含在//之间。二、调用RegExp对象的构造函数
  * 2、标识(高级搜索):一、g(全局搜索),i(不区分大小写),m(所行搜索),y(匹配从目标字符串的当前位置开始)
  * 3、特殊字符:
  * ^:匹配以..开始,$:匹配以..结束,*:匹配前一个表达式0次或多次,+:匹配前一个表达式1次或多次,?匹配前一个表达式0次或1次
  * .:匹配除换行符之外的任何单个字符，(x):匹配x并且记住匹配项,(?:x):匹配x但不记住匹配项,x(?=y)匹配x仅仅x后面跟着y,(?<=y)匹配x仅仅当x前面是y,
  * x(?!y)匹配x仅仅当x后面不跟着y,x|y匹配x或者y,{n}:n是一个正整数,匹配前面一个字符刚好发生n次,{n:m}至少n次，最多m次
  * [xyx]一个字符集合。匹配方括号中的任意字符[^xyz]反向字符集，\b匹配一个词的边界,\d:匹配一个数字,\s匹配一个空白字符,\w匹配一个单字字符
  * 3、匹配方法
  * RegExp:exec()返回一个数组，未匹配返回null,test()返回true或false,
  * string:match()返回一个数组或null,search():返回匹配到的位置的索引,未匹配返回-1,replace():使用替换字符串替换掉匹配到的子字符串
  *        split()
  */

  /**
   * 函数扩展
   * 1、允许为函数的参数设置默认值，
   * 2、对参数进行解构赋值
   * 3、rest参数 ...变量名，用于获取函数的多余参数
   * 4、箭头函数
   * 5、尾调用:在某个函数的最后一步调用另一个函数,尾调用优化,即只保留内层函数的调用帧。
   * 6、
   */
  /**
   * Module语法
   * 1、es6模块的设计思想尽量静态化，使得编译时就能确定模块的依赖关系
   * 2、es6模块不是对象，而是通过export命令显示指定输出的代码,再通过import输入
   * 3、export命令:用于规定模块的对外接口
   */