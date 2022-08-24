import { useState } from "react";

import TextField from "@/ui/text-field";
import Checkbox from "@/ui/checkbox";
import Button from "@/ui/button";
import withConfirmation from "@/ui/with-confirmation";
import TrashIcon from "@/ui/svgs/trash-icon";

const DeleteButton = withConfirmation(Button);

export default function Homepage() {
  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState({
    done: false,
    text: "Walk the dog",
  });

  return (
    <>
      <div className="mt-16 md:w-1/4 mx-auto">
        {task && (
          <div className="bg-gray-600 py-3 px-5 rounded-lg text-3xl">
            <div className="flex gap-4 items-center">
              <Checkbox
                value={task.done}
                onChange={(done) => {
                  console.dir({ done });
                  setTask((prev) => ({
                    ...prev,
                    done,
                  }));
                }}
              />

              <div className="flex-grow" onClick={() => setEdit(true)}>
                {edit ? (
                  <TextField
                    value={task.text}
                    onBlur={() => setEdit(false)}
                    onChange={(text) =>
                      setTask((prev) => ({
                        ...prev,
                        text,
                      }))
                    }
                  />
                ) : (
                  <p className="p-2 border-[3px] border-transparent text-white">
                    {task.text}
                  </p>
                )}
              </div>

              <DeleteButton
                renderMessage={() => (
                  <p>
                    Are you sure you want to delete &apos;{task?.text}&apos;?
                  </p>
                )}
                onConfirm={() => setTask(undefined)}
                className="transition hover:rotate-12 hover:bg-red-500 p-3 bg-gray-300 rounded-lg">
                <TrashIcon className="w-5 h-5" />
              </DeleteButton>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
