function Customer(firstName,lastName,email,mobile)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.mobile = mobile;
  this.fullName="";

  this.getfullname = function ()
  {
    //this.fullName = this.firstName+" "+this.lastName;
    return this.firstName + " " + this.lastName;
  }
}
