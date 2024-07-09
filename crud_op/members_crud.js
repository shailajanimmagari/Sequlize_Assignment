"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const members_1 = __importDefault(require("../models/members")); // Adjust the path as needed
function createMember(name, address, phoneNumber, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newMember = yield members_1.default.create({
                name,
                address,
                phone_number: phoneNumber,
                email
            });
            console.log('New member created:', newMember.toJSON());
        }
        catch (error) {
            console.error('Error creating member:', error);
        }
    });
}
createMember('Rishi', 'Telangana', '555-123-457', 'rishi@gmail.com');
function findMemberById(memberId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const member = yield members_1.default.findByPk(memberId);
            if (member) {
                console.log('Found member:', member.toJSON());
            }
            else {
                console.log('Member not found.');
            }
        }
        catch (error) {
            console.error('Error finding member:', error);
        }
    });
}
findMemberById(7);
function updateMember(memberId, updates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const member = yield members_1.default.findByPk(memberId);
            if (member) {
                yield member.update(updates);
                console.log('Member updated successfully.');
            }
            else {
                console.log('Member not found.');
            }
        }
        catch (error) {
            console.error('Error updating member:', error);
        }
    });
}
updateMember(1, { address: 'Thuni', phoneNumber: '555-980-6543' });
function deleteMember(memberId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const member = yield members_1.default.findByPk(memberId);
            if (member) {
                yield member.destroy();
                console.log('Member deleted successfully.');
            }
            else {
                console.log('Member not found.');
            }
        }
        catch (error) {
            console.error('Error deleting member:', error);
        }
    });
}
// Example usage
deleteMember(1);
