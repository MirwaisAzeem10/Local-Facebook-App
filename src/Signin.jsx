import React from 'react'

function Signin() {
  return (
    <>
    <div className='container mx-auto flex flex-col gap-2 bg-[#FFFFFF] shadow-xl p-10 w-[30%]'>
    <div className='flex justify-start '>
    <p className='text-[1.5rem] font-bold'>Sign Up</p>
    </div>
    <div className='flex justify-start'>
    <p>it's  quick and easy.</p>
    </div>
    <div>
        <hr className='border-[1px] w-full' />
    </div>
    <div className='flex  flex-row items-center gap-4 pt-5'>
        <input className='p-2' type='text' placeholder='firstname'/>
        <input className='p-2' type='text' placeholder='surname'/>
    </div>
    <div className='flex justify-start items-start text-start'>
    <input className='p-2 px-20' type='text' placeholder='Mobile number or email'/>
    </div>
    <div className='flex justify-start items-start text-start'>
    <input className='p-2 px-20' type='password' placeholder='New password'/>
    </div>
    <div className='flex justify-start'>
     <p className='text-sm text-[#606770]'>Date of birth ?</p>
    </div> 
     <div className='flex flex-row gap-8'>
     <select  className='p-2 border-[1px]'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
     </select>
     <select className='p-2 border-[1px]'>
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sep</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
     </select>
     <select  className='p-2 border-[1px]'>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
        <option>2016</option>
        <option>2015</option>
        <option>2014</option>
        <option>2013</option>
        <option>1925</option>
        <option>1924</option>
        <option>1923</option>
        <option>1922</option>
        <option>1921</option>
        <option>1920</option>
        <option>1919</option>
        <option>1918</option>
        <option>1917</option>
        <option>1916</option>
        <option>1915</option>
        <option>1914</option>
        <option>1914</option>
        <option>1913</option>
        <option>1912</option>
        <option>1911</option>
        <option>1910</option>
        <option>1909</option>
        <option>1908</option>
        <option>1907</option>
        <option>1906</option>
        <option>1905</option>
     </select>
     </div>

     <div className=''>
     

     </div>
    </div>
  

    </>
  )
}

export default Signin