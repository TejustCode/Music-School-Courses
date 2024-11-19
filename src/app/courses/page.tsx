'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import courseData from '@/data/music_courses.json';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function Page() {
  const searchParams = typeof window !== 'undefined' ? useSearchParams() : null;
  const filter = searchParams ? searchParams.get('filter') || 'All Courses' : 'All Courses';

  const filteredCourses = filter === 'All Courses'
    ? courseData.courses
    : courseData.courses.filter(course =>
        course.title.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        {filter} ({filteredCourses.length})
      </h1>
      <div className="flex flex-wrap justify-center mt-2">
        {filteredCourses.map((course, index) => (
          <CardContainer key={course.id || index} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {course.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <Link href={"/contact"}>
              <div className="flex justify-center items-center mt-20">
                <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Contact Us
                </CardItem>
              </div>
              </Link>
            </CardBody>
          </CardContainer>
        ))}
      </div>  
    </div>
  );
}

export default Page;