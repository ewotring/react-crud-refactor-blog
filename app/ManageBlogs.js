import React from 'react'
import ReactDOM from 'react-dom'
import BlogList from './BlogList.js';
import NewBlog from './NewBlog.js';
import FilterAndAdd from './Filter.js';
import ModifyBlog from './ModifyBlog.js';
import ShowBlog from './ShowBlog.js';
import ReBlog from './ReBlog.js';
import SignIn from './SignIn.js';
export default class ManageBlogs extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('BlogList') === null)
    {
      localStorage.setItem('BlogList', JSON.stringify([]));
    }

    this.state = {
      ShowNewBlogUI : false,
      ShowModifyBlogUI: false,
      ShowBlogList : true,
      ShowFilterUI: true,
      ShowBlogUI: false,
      ShowReBlogUI: false,
      BlogList: JSON.parse(localStorage.getItem('BlogList'))
    }
  }

  showNewBlogScreen() {
    var blogList = JSON.parse(localStorage.getItem('BlogList'));

    this.setState({
      ShowNewBlogUI : true,
      ShowBlogList : false,
      ShowFilterUI : false
    })
  }

  showModifyBlogScreen(blogToModify) {
    this.setState({
      ShowModifyBlogUI : true,
      ShowBlogList : false,
      ShowFilterUI : false,
      BlogToBeModified: blogToModify
    })
  }

  filterBlogList(filter) {
    var newBlogList = JSON.parse(localStorage.getItem("BlogList")).filter(function(blog) {
      return blog.BlogName.includes(filter);
    });
    this.setState({
      BlogList: newBlogList,
    });
  }
// Cannot stringify File object
// This might explain why I am losing my file
// Also, printing BlogList to console after the setItem seems to drop the last item in the blogList object.
  addNewBlog(blog) {
    var blogList = JSON.parse(localStorage.getItem('BlogList'));
    blogList.push(blog);
    localStorage.setItem("BlogList",JSON.stringify(blogList));
    this.setState({
      ShowNewBlogUI : false,
      ShowModifyBlogUI: false,
      ShowBlogList: true,
      ShowFilterUI: true,
      BlogList: JSON.parse(localStorage.getItem('BlogList'))
    });
  }

  showBlogScreen(blogToShow) {
    this.setState({
      ShowNewBlogUI : false,
      ShowModifyBlogUI: false,
      ShowBlogList : false,
      ShowFilterUI: false,
      ShowBlogUI: true,
      ShowReBlogUI: false,
      BlogToShow: blogToShow
    })
  }

  showReBlogScreen(blogToReBlog) {
    this.setState({
      ShowNewBlogUI : false,
      ShowModifyBlogUI: false,
      ShowBlogList : false,
      ShowFilterUI: false,
      ShowBlogUI: false,
      ShowReBlogUI: true,
      BlogToReBlog: blogToReBlog
    })
  }

  reBlog(blogToReBlog) {
    var blogList = JSON.parse(localStorage.getItem('BlogList'));
    blogList.push(blogToReBlog);
    localStorage.setItem("BlogList",JSON.stringify(blogList));
    this.setState({
      ShowNewBlogUI : false,
      ShowModifyBlogUI: false,
      ShowBlogList : true,
      ShowFilterUI: true,
      ShowBlogUI: false,
      ShowReBlogUI: false,
      BlogList: JSON.parse(localStorage.getItem('BlogList'))
    })
  }

  leaveBlog(blogToLeave) {
    var blogList = JSON.parse(localStorage.getItem('BlogList'));
    var index = blogList.findIndex(function(blog) {
      return blogToLeave.BlogName === blog.BlogName;
    });
    if (index != -1)
    {
      blogList[index].Comments = blogToLeave.Comments;
    }
    localStorage.setItem('BlogList',JSON.stringify(blogList));
    this.setState({
      ShowNewBlogUI : false,
      ShowModifyBlogUI: false,
      ShowBlogList : true,
      ShowFilterUI: true,
      ShowBlogUI: false,
      BlogList: JSON.parse(localStorage.getItem('BlogList'))
    })
  }

  modifyBlog(blogToModify) {
    var blogList = JSON.parse(localStorage.getItem('BlogList'));
    var index = blogList.findIndex(function(blog) {
      return blogToModify.BlogName === blog.BlogName;
    });
    if (index != -1)
    {
      blogList[index].BlogName = blogToModify.BlogName;
      blogList[index].Body = blogToModify.Body;
      blogList[index].UserId = blogToModify.UserId;
      blogList[index].Reblogger = blogToModify.Reblogger;
    }
    localStorage.setItem('BlogList',JSON.stringify(blogList));
    this.setState({
      ShowNewBlogUI: false,
      ShowModifyBlogUI: false,
      ShowBlogList: true,
      ShowFilterUI: true,
      BlogList: JSON.parse(localStorage.getItem('BlogList'))
    });
  }

  removeBlog(blogToRemove) {
    var result = confirm("Do you really want to remove the blog?");
    if (result == false)
      return;
    var blogList = JSON.parse(localStorage.getItem("BlogList"))
    var newBlogList = blogList.filter(function(blog) {
      return blog.BlogName != blogToRemove.BlogName
    });
    localStorage.setItem("BlogList", JSON.stringify(newBlogList));
    this.setState({
      BlogList: JSON.parse(localStorage.getItem('BlogList'))
    });
  }

  render() {
    return(
      <div>
        <SignIn />
        {this.state.ShowFilterUI && <FilterAndAdd OnAdd={this.showNewBlogScreen.bind(this)} OnFilter={this.filterBlogList.bind(this)} />}
        {this.state.ShowBlogList && <BlogList Blogs={this.state.BlogList} OnRead={this.showBlogScreen.bind(this)} OnEdit={this.showModifyBlogScreen.bind(this)} OnDelete={this.removeBlog.bind(this)} OnReBlog={this.showReBlogScreen.bind(this)} />}
        {this.state.ShowNewBlogUI && <NewBlog Blogs={this.state.BlogList} OnSubmit={this.addNewBlog.bind(this)} />}
        {this.state.ShowModifyBlogUI && <ModifyBlog Blogs={this.state.BlogList} Blog={this.state.BlogToBeModified} OnSubmit={this.modifyBlog.bind(this)} />}
        {this.state.ShowBlogUI && <ShowBlog Blog={this.state.BlogToShow} OnSubmit={this.leaveBlog.bind(this)} />}
        {this.state.ShowReBlogUI && <ReBlog Blog={this.state.BlogToReBlog} OnSubmit={this.reBlog.bind(this)} />}
      </div>
    );
  }
}
