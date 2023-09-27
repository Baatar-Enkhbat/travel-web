import React from "react";

import {Card, CardBody, CardFooter, Image ,CheckboxGroup, Checkbox} from "@nextui-org/react";

export default function CardConponent() {
    const placements = [
        "outside",
      ];
      const checkboxlist = [
        {
          label:"1*",
          value:"1",
        },
        {
            label:"2*",
          value:"2",
        },
        {
            label:"3*",
          value:"3",
        },
        {
            label:"4*",
          value:"4",
        },
        {
            label:"5*",
          value:"5",
        },
       
      ];
  const list = [
    {
      title: "Orange",
      img: "https://th.bing.com/th?id=OPA.a%2buSwGSa%2bInHkA474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1",
      price: "$5.50",
      star: "1",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
      star: "1",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
      star: "3",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
      star: "5",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
      star: "2",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
      star: "3",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
      star: "4",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row mt-10 px-5">
    <div shadow="sm" className="w-100 lg:w-[350px] h-[80vh] p-5 bg-white rounded-[15px] mb-5 lg:mb-0">

    <div className="mb-4">
    <iframe className="hidden lg:block w-100 h-[200px] border-0 rounded shadow-sm" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d85572.49799698014!2d106.91981614987793!3d47.914317628615755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smn!4v1695653371877!5m2!1sen!2smn" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <CheckboxGroup
      label="Зэрэглэл"
      defaultValue={["Зэрэглэл"]}
    >
         {checkboxlist.map((checkbox, index) => (
         
            <Checkbox value={checkbox.value}>{checkbox.label}</Checkbox>

        ))}
    </CheckboxGroup>
    </div>
    <div className="flex-auto w-100">
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ps-0 lg:ps-5">
        {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
                <Image
                shadow="sm"
                radius="sm"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
                />
            </CardBody>
            <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
            </CardFooter>
            </Card>
        ))}
        </div>
    </div>
    </div>
  );
}
