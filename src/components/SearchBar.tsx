import React from 'react'
import { Label, TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div>
      <div className="w-full sm:w-[33rem] ">
      <TextInput id="email4" type="email" rightIcon={CiSearch} placeholder="Search Companies"/>
    </div>
    </div>
  )
}
