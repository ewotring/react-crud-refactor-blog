import React from 'react'
import ReactDOM from 'react-dom'
import AccountList from './AccountList.js';
import NewAccount from './NewAccount.js';
import FilterAndAdd from './Filter.js';
import ModifyAccount from './ModifyAccount.js';
import ShowAccount from './ShowAccount.js';
import ReBlog from './ReBlog.js';
export default class ManageAccounts extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem('AccountList') === null)
    {
      localStorage.setItem('AccountList', JSON.stringify([]));
    }

    this.state = {
      ShowNewAccountUI : false,
      ShowModifyAccountUI: false,
      ShowAccountList : true,
      ShowFilterUI: true,
      ShowAccountUI: false,
      ShowReBlogUI: false,
      AccountList: JSON.parse(localStorage.getItem('AccountList'))
    }
  }

  showNewAccountScreen() {
    var accountList = JSON.parse(localStorage.getItem('AccountList'));

    this.setState({
      ShowNewAccountUI : true,
      ShowAccountList : false,
      ShowFilterUI : false
    })
  }

  showModifyAccountScreen(accountToModify) {
    this.setState({
      ShowModifyAccountUI : true,
      ShowAccountList : false,
      ShowFilterUI : false,
      AccountToBeModified: accountToModify
    })
  }

  filterAccountList(filter) {
    var newAccountList = JSON.parse(localStorage.getItem("AccountList")).filter(function(account) {
      return account.AccountName.includes(filter);
    });
    this.setState({
      AccountList: newAccountList,
    });
  }
// Cannot stringify File object
// This might explain why I am losing my file
// Also, printing AccountList to console after the setItem seems to drop the last item in the accountList object.
  addNewAccount(account) {
    var accountList = JSON.parse(localStorage.getItem('AccountList'));
    accountList.push(account);
    localStorage.setItem("AccountList",JSON.stringify(accountList));
    this.setState({
      ShowNewAccountUI : false,
      ShowModifyAccountUI: false,
      ShowAccountList: true,
      ShowFilterUI: true,
      AccountList: JSON.parse(localStorage.getItem('AccountList'))
    });
  }

  showAccountScreen(accountToShow) {
    this.setState({
      ShowNewAccountUI : false,
      ShowModifyAccountUI: false,
      ShowAccountList : false,
      ShowFilterUI: false,
      ShowAccountUI: true,
      ShowReBlogUI: false,
      AccountToShow: accountToShow
    })
  }

  showReBlogScreen(accountToReBlog) {
    this.setState({
      ShowNewAccountUI : false,
      ShowModifyAccountUI: false,
      ShowAccountList : false,
      ShowFilterUI: false,
      ShowAccountUI: false,
      ShowReBlogUI: true,
      AccountToReBlog: accountToReBlog
    })
  }

  reBlog(accountToReBlog) {
    var accountList = JSON.parse(localStorage.getItem('AccountList'));
    accountList.push(accountToReBlog);
    localStorage.setItem("AccountList",JSON.stringify(accountList));
    this.setState({
      ShowNewAccountUI : false,
      ShowModifyAccountUI: false,
      ShowAccountList : true,
      ShowFilterUI: true,
      ShowAccountUI: false,
      ShowReBlogUI: false,
      AccountList: JSON.parse(localStorage.getItem('AccountList'))
    })
  }

  leaveAccount(accountToLeave) {
    var accountList = JSON.parse(localStorage.getItem('AccountList'));
    var index = accountList.findIndex(function(account) {
      return accountToLeave.AccountName === account.AccountName;
    });
    if (index != -1)
    {
      accountList[index].Comments = accountToLeave.Comments;
    }
    localStorage.setItem('AccountList',JSON.stringify(accountList));
    this.setState({
      ShowNewAccountUI : false,
      ShowModifyAccountUI: false,
      ShowAccountList : true,
      ShowFilterUI: true,
      ShowAccountUI: false,
      AccountList: JSON.parse(localStorage.getItem('AccountList'))
    })
  }

  modifyAccount(accountToModify) {
    var accountList = JSON.parse(localStorage.getItem('AccountList'));
    var index = accountList.findIndex(function(account) {
      return accountToModify.AccountName === account.AccountName;
    });
    if (index != -1)
    {
      accountList[index].AccountName = accountToModify.AccountName;
      accountList[index].Website = accountToModify.Website;
      accountList[index].UserId = accountToModify.UserId;
      accountList[index].Password = accountToModify.Password;
    }
    localStorage.setItem('AccountList',JSON.stringify(accountList));
    this.setState({
      ShowNewAccountUI: false,
      ShowModifyAccountUI: false,
      ShowAccountList: true,
      ShowFilterUI: true,
      AccountList: JSON.parse(localStorage.getItem('AccountList'))
    });
  }

  removeAccount(accountToRemove) {
    var result = confirm("Do you really want to remove the account?");
    if (result == false)
      return;
    var accountList = JSON.parse(localStorage.getItem("AccountList"))
    var newAccountList = accountList.filter(function(account) {
      return account.AccountName != accountToRemove.AccountName
    });
    localStorage.setItem("AccountList", JSON.stringify(newAccountList));
    this.setState({
      AccountList: JSON.parse(localStorage.getItem('AccountList'))
    });
  }

  render() {
    return(
      <div>
        {this.state.ShowFilterUI && <FilterAndAdd OnAdd={this.showNewAccountScreen.bind(this)} OnFilter={this.filterAccountList.bind(this)} />}
        {this.state.ShowAccountList && <AccountList Accounts={this.state.AccountList} OnRead={this.showAccountScreen.bind(this)} OnEdit={this.showModifyAccountScreen.bind(this)} OnDelete={this.removeAccount.bind(this)} OnReBlog={this.showReBlogScreen.bind(this)} />}
        {this.state.ShowNewAccountUI && <NewAccount Accounts={this.state.AccountList} OnSubmit={this.addNewAccount.bind(this)} />}
        {this.state.ShowModifyAccountUI && <ModifyAccount Accounts={this.state.AccountList} Account={this.state.AccountToBeModified} OnSubmit={this.modifyAccount.bind(this)} />}
        {this.state.ShowAccountUI && <ShowAccount Account={this.state.AccountToShow} OnSubmit={this.leaveAccount.bind(this)} />}
        {this.state.ShowReBlogUI && <ReBlog Account={this.state.AccountToReBlog} OnSubmit={this.reBlog.bind(this)} />}
      </div>
    );
  }
}
