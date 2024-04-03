import { NavBar, DatePicker } from 'antd-mobile'
import './index.scss'
import { useState } from 'react'
import classNames from 'classnames'
import dayjs from 'dayjs'

const Month = () => {
  //控制弹框的显示
  const [dateVisible, setDateVisible] = useState(false)
  //控制时间的显示
  const [currentDate, setCurrentDate] = useState(() => { 
    // return dayjs(new Date()).format('YYYY-MM')
    return new Date()
  })
  //确认选择按钮
  const onConfirm = (date) => {
    setDateVisible(false)
    console.log(date);
    //获取时间
    setCurrentDate(date)
    console.log(currentDate);

  }
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => { setDateVisible(true) }}>
            <span className="text">
              { dayjs(currentDate).format('YYYY-MM') + ''}月账单
            </span>
            {/* //根据弹框打开控制expand类名 */}
            <span className={ classNames('arrow',dateVisible && 'expand')} ></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month