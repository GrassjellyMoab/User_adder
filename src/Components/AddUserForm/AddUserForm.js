import styles from './AddUserForm.module.css';
import React,{ useState } from 'react';

const AddUserForm = props => {
    // state for inputed name
    const [inputedName, setInputedName] = useState('');
    // state for inputed age
    const [inputedAge, setInputedAge] = useState('');

    // update state for name
    const nameChangeHandler = e => {
        setInputedName(e.target.value);
    }
    // update state for Age
    const ageChangehandler = e => {
        setInputedAge(e.target.value);
    }
    // submit handler function
    const submitHandler = (e) => {
        e.preventDefault();

        // organise data into an object
        const data = {
            name: inputedName,
            age: inputedAge
        }
        // lift data up to parent component
        props.saveData(data);

        if (data.name.trim().length > 0 && data.age.trim().length > 0 && +data.age > 0) {
            setInputedName('');
            setInputedAge('');
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={styles['new-expense__controls']}>
                <div className={styles['new-expense__control']}>
                    <label>Username</label>
                    <input type='text' value={inputedName} onChange={nameChangeHandler}></input>
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Age (Years)</label>
                    <input type='number' value={inputedAge} onChange={ageChangehandler}></input>
                </div>
                <button type='submit' className={styles['button']}>Add User</button>
            </div>
        </form>
    )
}

export default AddUserForm;