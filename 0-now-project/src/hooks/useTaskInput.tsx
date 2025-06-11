import { useState, useRef } from "react";

export const useTaskInput = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [textError, setTextError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const validate = () => {
    let isValid = true;
    if (!category) {
      setCategoryError(true);
      categoryRef.current?.focus();
      isValid = false;
    }
    if (!text) {
      setTextError(true);
      textRef.current?.focus();
      isValid = false;
    }
    return isValid;
  };

  const reset = () => {
    setText("");
    setCategory("");
    setTextError(false);
    setCategoryError(false);
  };

  return {
    text,
    setText,
    category,
    setCategory,
    textRef,
    categoryRef,
    textError,
    setTextError,
    categoryError,
    setCategoryError,
    validate,
    reset,
  };
};
