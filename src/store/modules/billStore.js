import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billList= createSlice({
  name: 'bill',
  //数据状态state
  initialState: {
    billList:[]
  },
  reducers: {
    //同步修改方法
    setBillList(state,action) { 
      state.billList = action.payload
    }
  }
})

//编写异步
const getBillList = () => { 
  return async (dispatch) => { 
    const res =await axios.get('http://localhost:8888/ka')
    dispatch(setBillList(res.data))
  }
}

//解构actionCreater函数
const { setBillList } = billList.actions

export { getBillList }

//导出reducer
const reducer = billList.reducer

export default reducer