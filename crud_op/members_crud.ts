import Member from '../models/members'; // Adjust the path as needed

async function createMember(name: string, address: string, phoneNumber: string, email: string) {
  try {
    const newMember = await Member.create({
      name,
      address,
      phone_number: phoneNumber,
      email
    });

    console.log('New member created:', newMember.toJSON());
  } catch (error) {
    console.error('Error creating member:', error);
  }
}


createMember('Rishi', 'Telangana', '555-123-457', 'rishi@gmail.com');

async function findMemberById(memberId: number) {
    try {
      const member = await Member.findByPk(memberId);
      if (member) {
        console.log('Found member:', member.toJSON());
      } else {
        console.log('Member not found.');
      }
    } catch (error) {
      console.error('Error finding member:', error);
    }
  }
  

  findMemberById(7);
  async function updateMember(memberId: number, updates: Partial<{ name: string, address: string, phoneNumber: string, email: string }>) {
    try {
      const member = await Member.findByPk(memberId);
      if (member) {
        await member.update(updates);
        console.log('Member updated successfully.');
      } else {
        console.log('Member not found.');
      }
    } catch (error) {
      console.error('Error updating member:', error);
    }
  }
  

  updateMember(1, { address: 'Thuni', phoneNumber: '555-980-6543' });
  
  async function deleteMember(memberId: number) {
    try {
      const member = await Member.findByPk(memberId);
      if (member) {
        await member.destroy();
        console.log('Member deleted successfully.');
      } else {
        console.log('Member not found.');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  }
  
  // Example usage
  deleteMember(1);
  