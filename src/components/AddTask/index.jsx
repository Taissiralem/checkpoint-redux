import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import "./styles.css";
// import { useAddTodosMutation } from "../../app/slices/apiSLice.js";
import { useDispatch, useSelector } from "react-redux";
import { addToTasks } from "../../app/slices/taskSlice";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();

  console.log(title, description);

  const handleSubmit = (e) => {
    // Prevent the form from refreshing the page
    e.preventDefault();
  };
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(addToTasks({ title, desc: description, isDone: false }));
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className="Button violet"
          size="large"
        >
          Add Task
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Task</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="title">
                title
              </label>
              <input
                className="Input"
                name="title"
                placeholder="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="desc">
                Description
              </label>
              <input
                className="Input"
                name="desc"
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => handleClick()}
                type="submit"
                className="Button green"
              >
                Add
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              onClick={() => setIsOpen(false)}
              className="IconButton"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddTask;
