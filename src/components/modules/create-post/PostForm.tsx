"use client";

import { ChangeEvent, FC, useState } from "react";
import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
  useFieldArray,
} from "react-hook-form";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { formatCalendarDate } from "@/src/utils/dateFormat";
import FXDateInput from "../../form/FXDateInput";
import FXInput from "../../form/FXInput";
import NavBlurEffect from "../../ui/navbar/navBlurEffect";
import FXSelect from "../../form/FXSelect";
import { cityOptions } from "@/src/utils/allDistrict";
import { useGetCategoriesQuery } from "@/src/hooks/category.hook";
import { FaImages, FaMinus, FaPlus } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import Image from "next/image";
import FXTextarea from "../../form/FXTextarea";
import { useCreatePostMutation } from "@/src/hooks/post.hook";
import { useUser } from "@/src/context/userProvider";
import { useRouter } from "next/navigation";

type TPostFormProps = object;

const PostForm: FC<TPostFormProps> = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const { user } = useUser();
  const methods = useForm();
  const router = useRouter();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  // Call post creating hook
  const {
    mutate: createPostFn,
    isPending: postPending,
    isSuccess: postSuccess,
  } = useCreatePostMutation();

  // Fetching category data
  const {
    data: categoriesData,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategoriesQuery();

  let categoriesOptions: { key: string; label: string }[] = [];

  if (categoriesData?.data && !categoryLoading) {
    categoriesOptions = categoriesData.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name,
      }));
  }

  // Handle post data
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    if (user) {
      const postData = {
        ...data,
        questions: data?.questions.map((que: { value: string }) => que.value),
        dateFound: formatCalendarDate(data.dateFound),
        user: user._id,
      };

      formData.append("data", JSON.stringify(postData));

      for (let image of imageFiles) {
        formData.append("itemImages", image);
      }

      createPostFn(formData);
    }
  };

  // Handle question handler
  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  // Image handler
  const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    setImageFiles((prevFiles) => [...prevFiles, ...files]);

    if (files) {
      files.forEach((file) => {
        const reader = new FileReader();

        reader!.onloadend = () => {
          setImagePreviews((prevImage) => [
            ...prevImage,
            reader.result as string,
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Handle removing an image
  const removeImageHandler = (index: number) => {
    setImageFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setImagePreviews((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  if (!postPending && postSuccess) {
    router.push("/");
  }

  return (
    <div>
      <FormProvider {...methods}>
        <NavBlurEffect
          height="h-[100px]"
          maxWidth="mx-w-5xl relative -top-[100px] "
        />
        <form
          className="space-y-3 w-full px-4 py-6 border border-default-50 rounded-lg bg-gradient-to-b from-default-100 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-default-700 text-sm">Pst a found item</h2>
          <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />{" "}
          {/* Flex container for inputs */}
          <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
            <div className="md:flex-1">
              <FXInput
                isRequired={true}
                label="Title"
                name="title"
                size="sm"
                type="text"
              />
            </div>
            <div className="md:flex-1">
              <FXDateInput
                isRequired={true}
                label="Date Found"
                name="dateFound"
                size="sm"
              />
            </div>
          </div>
          {/* Flex container for inputs */}
          <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
            <div className="md:flex-1">
              <FXInput label="Location" name="location" size="sm" type="text" />
            </div>
            <div className="md:flex-1">
              <FXSelect
                isRequired={true}
                label="City"
                name="city"
                options={cityOptions}
                size="sm"
              />
            </div>
          </div>
          {/* Selection */}
          <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
            <div className="md:flex-1">
              <FXSelect
                disabled={!categorySuccess}
                isRequired={true}
                label="Category"
                name="category"
                options={categoriesOptions}
                size="sm"
              />
            </div>
            <div className="md:flex-1">
              <label
                className="text-default-600 text-sm flex h-12 flex-row items-center justify-center gap-2 p-2 bg-default-100 transition-colors-opacity border border-dashed  border-default-400 rounded-lg cursor-pointer"
                htmlFor="image"
              >
                Upload
                <FaImages className="text-secondary" size={22} />
                <input
                  multiple
                  required
                  className="hidden"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => imageHandler(e)}
                />
              </label>
            </div>
          </div>
          {/* Upload images */}
          <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
            <div className="flex items-center gap-3 flex-wrap">
              {imagePreviews.length > 0 &&
                imagePreviews.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={`Preview ${index + 1}`}
                      className="w-[100px] h-[80px] object-cover object-center rounded-md border border-dashed  border-default-400"
                      height={500}
                      src={image}
                      width={500}
                    />
                    <TiDelete
                      className="absolute top-0 right-0  text-secondary rounded-full cursor-pointer"
                      size={20}
                      onClick={() => removeImageHandler(index)}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* Flex container for inputs */}
          <div className="md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 gap-3 w-full">
            <div className="md:flex-1">
              <FXTextarea
                isRequired={true}
                label="Description"
                name="description"
                rows={6}
                size="sm"
                type="text"
              />
            </div>
          </div>
          <Divider className="my-2" />
          {/* Questions section */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-default-700 text-sm">
              Owner verifications questions
            </h2>
            <Button
              isIconOnly
              className="z-50"
              color="default"
              size="sm"
              startContent={<FaPlus className="text-default-600" size={14} />}
              variant="flat"
              onClick={handleFieldAppend}
            />
          </div>
          {/* Dynamic fields for questions */}
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-row items-center justify-between mb-3"
            >
              <div className="flex-1 mr-2">
                <FXInput
                  className="w-full"
                  isRequired={true}
                  label="Add question"
                  name={`questions.${index}.value`}
                  size="sm"
                  type="text"
                />
              </div>
              <Button
                isIconOnly
                className="z-50"
                color="default"
                size="sm"
                startContent={
                  <FaMinus className="text-default-600" size={14} />
                }
                variant="flat"
                onClick={() => remove(index)}
              />
            </div>
          ))}
          <Divider className="my-2" />
          {/* Submit button */}
          <div className="flex items-end justify-end ">
            {" "}
            <Button
              className="mt-2 z-20"
              color="secondary"
              isDisabled={postPending}
              isLoading={postPending}
              type="submit"
              variant="flat"
            >
              Post
            </Button>
          </div>
        </form>
      </FormProvider>
      <NavBlurEffect
        height="h-[200px]"
        maxWidth="mx-w-5xl relative -mt-[100px] right-0"
      />
    </div>
  );
};

export default PostForm;
