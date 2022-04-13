/*import React from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import "./../../assets/css/style.css";

const HomePage = () => {
    return (
        <div className="wrapper">
            <Text />
            <Input />
            <br/>
            <Button />
        </div>
    );
};

export default HomePage;*/
import React, { useState } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import "./../../assets/css/style.css";
const HomePage = () => {
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [loading, setLoading] = useState(false);
const removeData = () => {
    setLoading(true);
    if (name.length && age.length) {
         setTimeout(() => {
        setLoading(false);
      }, 5000);
        setName("");
         setAge("");
    } else {
        setLoading(false);
        alert("Nhap gia tri");
        return false;
    }
  };

  return (
    <div className="wrapper">
        {loading ? (
            <h1>Loading...</h1>
      ) : (
            <div>
                <div>
                    <Text text={"Name: " + name} />
                    <Text text={"Age: " + age} />
                </div>
                <Input
                    labelText="Ten"
                    placeholderText="Nhap ten"
                    handleOnChange={(e) => setName(e.target.value)}
                />
                <Input
                    labelText="Tuoi"
                    placeholderText="Nhap tuoi"
                    handleOnChange={(e) => setAge(e.target.value)}
                />
                <Button onClickHandle={() => removeData()} btnText="Clear Data" />
            </div>
      )}
    </div>
  );
};

export default HomePage;