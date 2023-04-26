import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
    const { contactList, keyword } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);
  
    useEffect(() => {
      if (keyword !== "") {
        let list = contactList.filter((item) => item.name.includes(keyword));
        setFilteredList(list);
      } else {
        setFilteredList(contactList);
      }

    }, [keyword]);

    return (
        <div>
            <p className="contact-leng">num:{filteredList.length}</p>
            <SearchBox />
            <div>
                {filteredList.map((item,idx) => (
                    <ContactItem key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;