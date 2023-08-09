import React from 'react';

function Price() {
  return (
    <div>
       <div className = 'card-container'>
      <div className='card'>
        <p className='para1'>FREE</p>
        <p className='heading'>$0/<span className='span1'>month</span></p>
        <hr />
        <ul className='order'>
          <li className='listItem'><span className='icon'></span>Single User</li>
          <li className='listItem'><span className='icon'></span>50GB Storage</li>
          <li className='listItem'><span className='icon'></span>Unlimited Public Projects</li>
          <li className='listItem'><span className='icon'></span>Community Access</li>
          <li className='listItem'><span className='icon'></span>Unlimited Private Projects</li>
          <li className='listItem'><span className='icon'></span>Dedicated Phone Support</li>
          <li className='listItem'><span className='icon'></span>Monthly Status Reports</li>
        </ul>
        <button className='btn1'>Buy me</button>
      </div>

   
      <div className='card'>
        <p className='para1'>PLUS</p>
        <p className='heading'>$9/<span className='span1'>month</span></p>
        <hr />
        <ul className='order'>
          <li className='listItem'><span className='icon'></span>5 User</li>
          <li className='listItem'><span className='icon'></span>50GB Storage</li>
          <li className='listItem'><span className='icon'></span>Unlimited Public Projects</li>
          <li className='listItem'><span className='icon'></span>Community Access</li>
          <li className='listItem'><span className='icon'></span>Unlimited Private Projects</li>
          <li className='listItem'><span className='icon'></span>Dedicated Phone Support</li>
          <li className='listItem'><span className='icon'></span>Monthly Status Reports</li>
        </ul>
        <button className='btn1'>Buy me</button>
      </div>

      <div className='card'>
        <p className='para1'>PREMIUM</p>
        <p className='heading'>$49/<span className='span1'>month</span></p>
        <hr />
        <ul className='order'>
          <li className='listItem'><span className='icon'></span>Single User</li>
          <li className='listItem'><span className='icon'></span>50GB Storage</li>
          <li className='listItem'><span className='icon'></span>Unlimited Public Projects</li>
          <li className='listItem'><span className='icon'></span>Community Access</li>
          <li className='listItem'><span className='icon'></span>Unlimited Private Projects</li>
          <li className='listItem'><span className='icon'></span>Dedicated Phone Support</li>
          <li className='listItem'><span className='icon'></span>Monthly Status Reports</li>
        </ul>
        <button className='btn1'>Buy me</button>
      </div>
    </div>
    </div>
  );
}

export default Price;
