import Book from './models/books';
import  Author  from './models/authors';
import  Loan  from './models/loans'; 
import  Member  from './models/members'; 
import Reservation from './models/reservations'

const Associations = async() =>{
// Books and Authors
Book.belongsTo(Author,{foreignKey:'authorId'});
Author.hasMany(Book,{foreignKey:'authorId'});

//Loans, Members and Books
Book.hasMany(Loan,{foreignKey:'book_id'});
Loan.belongsTo(Book,{foreignKey:'book_id'});
Member.hasMany(Loan,{foreignKey:'member_id'});
Loan.belongsTo(Member,{foreignKey:'member_id'});
}

/*Reservations, Books, Members
Member.hasMany(Reservation,{foreignKey:'member_id'});
Reservation.belongsTo(Member,{foreignKey:'member_id'});
Book.hasMany(Reservation,{foreignKey:'book_id'});
Reservation.belongsTo(Book,{foreignKey:'book_id'});
}*/
export default Associations;


