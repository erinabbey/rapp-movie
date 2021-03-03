import React, {useCallback} from 'react'

const UseCallback = () => {
    const[text, setText ] = React.useState('')
    return (
        <div>
            <input type = "text" value = {text} onChange = {e=> setText(e.target.value)} ></input>
            <Wrap/>
        </div>
    )
}

const Wrap = () =>{
    const [isChecked, setisChecked] = React.useState(false);
    const toggedCheck = useCallback(
        () => {
            setisChecked(!isChecked)
        },
        [isChecked]
    )
    return <Checkbox  onClick = {toggedCheck} value = {isChecked}/>
}

const Checkbox = React.memo(({value, onClick})=>{
    console.log("re-render?");
    return(
    <div style = {{cursor: 'pointer'}} onClick = {onClick}>
        {value? '☑' : '□'}
    </div>
)
})
const UsingMemo = ({ products }) => {
    const soldoutProducts = React.useMemo(
      () => products.filter(x => x.isSoldout === true), // / soldoutProducts sẽ chỉ thực thi khi props products thay đổi
      [products] // watch products
    );
  };

export default UseCallback
