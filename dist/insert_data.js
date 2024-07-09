"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loansData = exports.membersData = exports.booksData = exports.authorsData = void 0;
exports.authorsData = [
    {
        name: 'Anusha',
        birth_year: '09-03-2003',
        nationality: 'South-Korea'
    },
    {
        name: 'Shailaja',
        birth_year: '29-10-2002',
        nationality: 'India'
    },
    {
        name: 'Keerthana',
        birth_year: '03-12-2002',
        nationality: 'India'
    },
    {
        name: 'Sreeja',
        birth_year: '13-09-2002',
        nationality: 'America'
    }
];
exports.booksData = [
    {
        title: 'The Goal',
        authorId: 1,
        genre: 'Novel',
        isbn: '1234567890',
        publication_year: 2020
    },
    {
        title: 'Stop Being Lazy',
        authorId: 2,
        genre: 'Personal Development',
        isbn: '2345678901',
        publication_year: 2021
    },
    {
        title: 'Music Speaks',
        authorId: 3,
        genre: 'Music',
        isbn: '3456789012',
        publication_year: 2021
    },
    {
        title: 'Soft Skills',
        authorId: 4,
        genre: 'Non-fiction',
        isbn: '4567890123',
        publication_year: 2022
    }
];
exports.membersData = [
    {
        name: 'Anusha',
        address: 'Seoul',
        phone_number: '+11 3245343',
        email: 'anu@gmail.com'
    },
    {
        name: 'Shailaja',
        address: 'Telangana',
        phone_number: '+91 9951534914',
        email: 'shailu@gmail.com'
    },
    {
        name: 'Keerthana',
        address: 'Erragadda',
        phone_number: '+91 87673653',
        email: 'keer@gmail.com'
    },
    {
        name: 'Sreeja',
        address: 'Mexico',
        phone_number: '+41 3245343',
        email: 'sreeja@gmail.com'
    },
];
exports.loansData = [
    {
        book_id: 1,
        member_id: 1,
        loan_date: new Date('2024-07-01'),
        due_date: new Date('2024-07-05')
    },
    {
        book_id: 2,
        member_id: 2,
        loan_date: new Date('2024-07-02'),
        due_date: new Date('2024-07-06')
    },
    {
        book_id: 3,
        member_id: 3,
        loan_date: new Date('2024-07-03'),
        due_date: new Date('2024-07-07')
    },
    {
        book_id: 4,
        member_id: 4,
        loan_date: new Date('2024-07-04'),
        due_date: new Date('2024-07-08')
    },
];
