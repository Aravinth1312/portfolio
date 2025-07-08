/*
 * Copyright 2025 Aravinth M
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Flight Booking System',
    description:
      'A full-featured flight booking web application with user registration, flight search, seat booking, admin approval, and booking history management using Java Servlets and MySQL.',
    tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS'],
    githubLink: 'https://github.com/Aravinth1312',

    type: 'Backend',
    thumbnail:
      'https://raw.githubusercontent.com/harismuneer/Flight-Booking-System-JavaServlets_App/master/Images/main.png',
    carouselImages: [
      'https://raw.githubusercontent.com/harismuneer/Flight-Booking-System-JavaServlets_App/master/Images/login.png',
      'https://raw.githubusercontent.com/harismuneer/Flight-Booking-System-JavaServlets_App/master/Images/book.png',
      'https://raw.githubusercontent.com/harismuneer/Flight-Booking-System-JavaServlets_App/master/Images/approve.png',
      'https://raw.githubusercontent.com/harismuneer/Flight-Booking-System-JavaServlets_App/master/Images/current.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
  {
    id: 2,
    title: 'Library Management System',
    description:
      'A web-based library management system developed using Java Servlets and MySQL, enabling user login, book issuing/return, inventory tracking, and admin control over student records.',
    tags: ['Java', 'Servlets', 'MySQL', 'HTML', 'CSS', 'Web App'],
    githubLink: 'https://github.com/Aravinth1312',
    liveLink: '',
    type: 'CLI',
    thumbnail:
      'https://raw.githubusercontent.com/guptaanmol184/LibraryManagementSystem/refs/heads/master/screens/login.png',
    gifUrl:
      'https://raw.githubusercontent.com/PraveenGongada/Catalyst/refs/heads/main/docs/images/catalyst-demo.gif',
  },
  {
    id: 3,
    title: 'Hostel Management System',
    description:
      'A full-stack hostel management web app using Java Servlets and MySQL for managing student details, leave requests, attendance, and warden approvals.',
    tags: ['Java', 'Servlets', 'MySQL', 'HTML', 'CSS', 'Web App'],
    githubLink: 'https://github.com/Aravinth1312',
    type: 'Web App',
    thumbnail: 'https://raw.githubusercontent.com/starkblaze01/Hostel-Management/Docs/home.png',
    carouselImages: [
      'https://raw.githubusercontent.com/starkblaze01/Hostel-Management/Docs/dashboard.png',
      'https://raw.githubusercontent.com/starkblaze01/Hostel-Management/Docs/room%20cleaning.png',
    ],
    carouselConfig: {
      interval: 2000,
      infinite: true,
    },
  },
];
