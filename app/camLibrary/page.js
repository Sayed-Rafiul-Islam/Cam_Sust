import React from 'react';
import "animate.css"
import './module.camLibrary.css'
import { getBooks } from '@/sanity/sanity-utils';

const CamLibrary = async () => {
    const books = await getBooks()

    return (
        <div className='animate__animated animate__fadeInLeft w-screen lg:pt-20 pt-12'>
                <div className='camLibrary mx-auto'>
                        <h1 className='lg:text-5xl lg:pt-5 text-3xl text-center font-bold text-white'>ক্যাম-লাইব্রেরির নিয়মাবলী</h1>
                        <div className='grid lg:grid-cols-2'>
                            <div className='px-5 py-4 m-4 rounded-xl'>
                                <h2 className='orange text-2xl font-bold'>এক: গ্রন্থাগারের সদস্যপদ লাভ</h2>
                                <ol className='text-sm mt-3'>
                                    <li>১ ক্যাম-সাস্টের সাধারণ সদস্যরা ক্যাম-লাইব্রেরির সদস্য বলে বিবেচিত হবে।</li>
                                    <li>২ ক্যাম-সাস্টের বিশেষ সদস্যগণ প্রেসিডেন্ট ও লাইব্রেরিয়ানের অনুমতিক্রমে লাইব্রেরির বই ব্যবহার করতে পারবেন। </li>
                                    <li>৩ বিশেষ সদস্য কারা ?
                                        <ol>
                                            <li>৩.১ স্কুল ও কলেজ প্রতিনিধিগণ</li>
                                            <li>৩.২ ক্যামসাস্টের সদস্য নয় কিন্তু জ্যোতির্বিজ্ঞানী আগ্রহী এবং ক্যামের শুভাকাঙ্ক্ষী ব্যক্তি। এ ক্ষেত্রে শাবিপ্রবির বাইরের কারো জন্যও এটি প্রযোজ্য হবে। </li>
                                        </ol>
                                    </li>
                                    <li>৪ লাইব্রেরির সদস্যগণের নাম, বিভাগ, রেজি. নং, পূর্ণাঙ্গ ঠিকানা, ইমেইল এবং মোবাইল নং লাইব্রেরিয়ানের নিকট সংরক্ষিত থাকবে।</li>
                                </ol>
                            </div>

                            <div className='px-5 py-4 m-4 rounded-xl'>
                                <h2 className='orange text-2xl font-bold'>দুই: বই ধার নেওয়া</h2>
                                <ol className='text-sm mt-3'>
                                    <li>১ একজন সদস্য একবারে ১টি বই ধার নিতে পারবেন।</li>
                                    <li>২ জরিমানা বকেয়া পড়লে বই সরবরাহ বন্ধ রাখা হবে।</li>
                                    <li>৩ লাইব্রেরী থেকে বই নেয়ার জন্য camsust@gmail.com -এ নিজের নাম, বইয়ের নাম ও CAM-ID উল্লেখ পূর্বক মেইল করতে হবে।</li>
                                    <li>৪ এছাড়া নির্ধারিত দিনে উপস্থিত থেকেও বই নেয়া যাবে।</li>
                                </ol>
                            </div>

                            <div className='px-5 py-4 m-4 rounded-xl'>
                                <h2 className='orange text-2xl font-bold'>তিন: বই ফেরত দেওয়া</h2>
                                <ol className='text-sm mt-3'>
                                    <li>১ বই নেয়ার ৭ দিনের ভেতরে বই ফেরত দিতে হবে।</li>
                                    <li>২ বই যথাসময়ে হস্তান্তর করতে ব্যর্থ হলে দুই সপ্তাহ পর থেকে প্রতি দিনের জন্য ১০ টাকা করে জরিমানা দিতে হবে। </li>
                                    <li>৩ কোন কারণে বিশ্ববিদ্যালয় টানা ৭ দিন বা তার বেশি বন্ধ থাকলে বন্ধ শুরু হওয়ার ৩ দিন আগে থেকে সকল বই লাইব্রেরিতে জমা দিতে হবে। </li>
                                    <li>৪ বই ফেরতে এক সপ্তাহের বেশি দেরী করলে সঞ্চালক হতে পারবেন না। বিশেষ সদস্যরা ঐ সপ্তাহের জন্য নতুন বই নিতে পারবেন না।</li>
                                </ol>
                            </div>

                            <div className='px-5 py-4 m-4 rounded-xl'>
                                <h2 className='orange text-2xl font-bold'>চার: অন্যান্য</h2>
                                <ol className='text-sm mt-3'>
                                    <li>১ বইয়ে কোন প্রকার দাগ, অলংকরণ, মন্তব্য, টীকা, টিপ্পনী ইত্যাদি দেওয়া অথবা বইয়ের পৃষ্ঠা/মলাট ছেঁড়া সম্পূর্ণরূপে নিষিদ্ধ। বই হারালে অথবা বইয়ের কোনরূপ ক্ষতি সাধন করলে বই গ্রহণকারী উক্ত বইয়ের একটি নতুন কপি প্রদান অথবা বইয়ে উল্লেখিত মূল্যের দ্বিগুণ মূল্য পরিশোধ করতে বাধ্য থাকবেন।</li>
                                    <li>২ জরিমানা বকেয়া পড়লে বই সরবরাহ বন্ধ রাখা হবে।</li>
                                    <li>৩ লাইব্রেরী থেকে বই নেয়ার জন্য camsust@gmail.com -এ নিজের নাম, বইয়ের নাম ও CAM-ID উল্লেখ পূর্বক মেইল করতে হবে।</li>
                                    <li>৪ দুই মাস অন্তর লাইব্রেরি কার্যক্রম সঞ্চালনের জন্য যে কোনো সাধারণ সদস্য সুযোগ পাবে। সকল বই এবং ম্যাগাজিন সঞ্চালকের কাছে ব্যবস্থাপনার জন্য সংরক্ষিত থাকবে।</li>
                                </ol>
                            </div>
                        </div>
                </div>
                
                <div className='pb-10'>
                    <h1  className='text-5xl lg:pt-20 pt-10 text-center font-bold text-white'>বইয়ের তালিকা</h1>
                    <table className='mt-5'>
                        <tr>
                            <th>সি.ন.</th>
                            <th>নাম</th>
                            <th>লেখক</th>
                            <th>প্রকাশনী</th>
                        </tr>
                        {
                            books.map(({_id,title,author,serial,publisher}) => 
                                <tr classeName='' key={_id}>
                                    <td className=''>{serial}</td>
                                    <td>{title}</td>
                                    <td>{author}</td>
                                    <td>{publisher}</td>
                                </tr> 
                            )
                        }
                        
                    </table>
                </div>
        </div>
    );
};

export default CamLibrary;