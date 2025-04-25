import { useState, useRouter } from "next/router";
import useSWR from "swr";
import Form from "@/components/Form";
import { StyledLink } from "@/components/StyledLink";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/places/${id}`);

  console.log(data);
  async function handleEditPlace(placeData) {
    console.log(placeData);

    const response = await fetch(`/api/places/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(placeData),
    });

    if (response.ok) {
      router.back();
    }
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;

  return (
    <>
      <h2 id="edit-place">Edit Place</h2>
      <StyledLink href={`/places/${id}`} $justifySelf="start">
        back
      </StyledLink>
      <Form
        onSubmit={handleEditPlace}
        formName={"edit-place"}
        defaultData={data}
      />
    </>
  );
}
