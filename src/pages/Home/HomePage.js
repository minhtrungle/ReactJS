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

// todo:Buổi 9 props
/*import React, { useState } from "react";
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

  const momoFuntion = (value) => {
      console.log(value);
      return value;
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

export default HomePage;*/


// todo: Buổi 10 useEffect, useState

/*import React, { useState, useMemo, useEffect } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import useCalculate from "./../../untils/useCalculate";
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
      alert("Nhập giá trị");
      return false;
    }
  };

  const memoFunction = (value) => {
    console.log(value);
    return value;
  };
  const memo = useMemo(() => memoFunction(name), [name, age]);

  const totalCalculate = useCalculate(age);
  return (
    <div className="wrapper">
      {loading ? (
        <h1>
          {" "}
          <Text text="Loading... " />
        </h1>
      ) : (
        <div>
          <div>
            <h1>{memo}</h1>
            <Text text={"Hello: " + name} />
            <Text text={"Age: " + age} />
            <Text text={"Caculate: " + totalCalculate} />
          </div>
          <Input
            labelText="Tên"
            placeholderText="Nhập tên"
            handleOnChange={(e) => setName(e.target.value)}
          />
          <Input
            labelText="Tuổi"
            placeholderText="Nhập tuổi"
            handleOnChange={(e) => setAge(e.target.value)}
          />
          <Button onClickHandle={() => removeData()} btnText="Clear Data" />
          <button onClick={() => alert("test")}>Test</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;*/

// todo: Buổi 11 React-Hook-Form

/*import React, { useState, useMemo, useEffect, useCallback } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import useCalculate from "./../../untils/useCalculate";
import "./../../assets/css/style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  fullName: yup.string().required().min(5, 'Cần 5 ký tự'),
  age: yup.number().required().min(5, 'Cần 5 ký tự'),
}).required();

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setValue("name", '');
    setValue("age", null);
  };


  return (
    <div className="wrapper">
      {loading ? (
        <h1>
          {" "}
          <Text text="Load" />
        </h1>
      ) : (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ marginBottom: '2rem' }}
              {...register("name")}
              placeholder="Tên"
            />
            <p>{errors.fullName?.message}</p>
            <br />
            <input
              placeholder="Tuổi"
              type="number"
              {...register("age")}
              style={{ marginBottom: '2rem' }}
            />
            <p>{errors.age?.message}</p>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;*/


// todo: Buổi 12 add style reactjs 

import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  StyleSheet,
} from "react";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Button from "./../../components/commons/Button";
import Input from "./../../components/commons/Input";
import Text from "./../../components/commons/Text";
import useCalculate from "./../../untils/useCalculate";
import "./../../assets/css/style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  fullName: yup.string().required().min(5, 'Cần 5 ký tự'),
  age: yup.number().required().min(5, 'Cần 5 ký tự'),
}).required();

const HomePage = () => {
const [loading, setLoading] = useState(false);
const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

const onSubmit = data => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setValue("name", '');
    setValue("age", null);
  };


  return (
    <div className="wrapper">
      {loading ? (
        <h1>
          {" "}
          <Text text="Load" />
        </h1>
      ) : (
        <div>
          <Text colorText="blue" bg="white" text="Loading" />
          <Text colorText="red" bg="white" text="Loading" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ marginBottom: '2rem' }}
              {...register("name")}
              placeholder="Tên"
            />
            <p>{errors.name?.message}</p>
            <br />
            <input
              placeholder="Tuổi"
              type="number"
              {...register("age")}
              style={{ marginBottom: '2rem' }}
            />
            <p>{errors.age?.message}</p>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;