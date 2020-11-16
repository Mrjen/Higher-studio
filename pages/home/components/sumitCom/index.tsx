import React from "react";
import style from "./sumitCom.scss";
import { useForm } from "react-hook-form";

const SumitCom = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={style.sumitcom}>
      <div className={style.main}>
        <p className={style.title}>快速提交你的需求</p>
        <p className={style.subtitle}>如果有合作意向，可以提交你的信息，我们将会联系你并讨论具体需求</p>

        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={style.input}
            placeholder="你的姓名"
            name="你的姓名"
            ref={register({ required: true, min: 2, maxLength: 80 })}
          />
          <input
            type="text"
            className={style.input}
            placeholder="微信号"
            name="微信号"
            ref={register({ required: true, min: 4, maxLength: 100 })}
          />
          <input
            type="tel"
            className={style.input}
            placeholder="你的电话"
            name="你的电话"
            ref={register({ required: true, min: 11, maxLength: 11 })}
          />
          <input type="text" className={style.input} placeholder="公司名称" name="公司名称" ref={register} />
          <textarea
            className={style.textArea}
            name="你的需求描述"
            placeholder="你的需求描述"
            ref={register}
          />

          <input type="submit" className={style.submit} />
          <p className={style.wechat}>
            或者添加官方微信号<span className={style.num}> hu60356222</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SumitCom;
