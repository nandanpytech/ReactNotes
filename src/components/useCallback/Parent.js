import React,{useCallback, useState} from 'react'
import Age from './Age'
import ButtonAge from './ButtonAge'
import Buttonsalary from './Buttonsalary'
import Salary from './Salary'

export default function Parent() {
    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(1000)

    const changeage=useCallback(()=>{
        setage(age+1)
    },[age])
    const changesalary=useCallback(()=>{
        setsalary(salary+1000)
    },[salary])
  return (
    <div>
        <Age age={age}></Age>
        <ButtonAge changeage={changeage}></ButtonAge>
        <Salary salary={salary}></Salary>
        <Buttonsalary changesalary={changesalary}></Buttonsalary>
    </div>
  )
}
