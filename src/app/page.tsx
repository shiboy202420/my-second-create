"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [studentClass, setStudentClass] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [bloodGroup, setBloodGroup] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [homeAddress, setHomeAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && studentClass && idNumber && photo && bloodGroup && dateOfBirth && email && homeAddress && phoneNumber) {
      setShowCard(true);
    } else {
      alert("Please fill all fields and upload a photo.");
    }
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setName("");
    setStudentClass("");
    setIdNumber("");
    setBloodGroup("");
    setDateOfBirth("");
    setEmail("");
    setHomeAddress("");
    setPhoneNumber("");
    setPhoto(null);
    setShowCard(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100  font-sans">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Student ID Generator</h1>

      {!showCard ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white  rounded-xl p-5 max-w-xl space-y-4"
        >
          <input
            type="text"
            placeholder="Enter Student Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Enter Student Class"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Enter Student ID Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Blood Group"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Enter Your Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Enter Student Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          /><input
            type="text"
            placeholder="Enter Student Home Address"
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            placeholder="Enter student Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full text-sm text-gray-600"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
          >
            Generate ID Card
          </button>
        </form>
      ) : (
        <div
          className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm text-center space-y-4"
          aria-label="Student ID Card"
        >
          <h2 className="text-xl font-semibold text-gray-800">Student ID Card</h2>
          {photo && (
            <Image
              src={photo}
              alt="Student"
              width={96}
              height={96}
              className="rounded-full mx-auto border object-cover"
            />
          )}
          <p className="text-gray-700">
            <strong>Name:</strong> {name}
          </p>
          <p className="text-gray-700">
            <strong>Class:</strong> {studentClass}
          </p>
          
          <p className="text-gray-700">
            <strong>BLOOD GROUP:</strong> {bloodGroup}
          </p>
          <p className="text-gray-700">
            <strong>DATE OF BIRTH:</strong> {dateOfBirth}
          </p>
          <p className="text-gray-700">
            <strong>EMAIL:</strong> {email}
          </p>
          <p className="text-gray-700">
            <strong>HOME ADDRESS:</strong> {homeAddress}
          </p>
          <p className="text-gray-700">
            <strong>PHONE NUMBER:</strong> {phoneNumber}
          </p>
      
          <button
            onClick={resetForm}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
