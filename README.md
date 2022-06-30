# Washup  Carwash
## Description

**The main use of this app is for customers to schedule an appointment with a service provider, in this case a carwash company.**
*** 

## Feature Lists

### Front-end: 
- Home/landing page of service
    - Service description 
    - Call to action button(sign-up and schedule service)
- Sign-up page and form
    - Form will ask for
        - Name
        - Email
        - Password
        - Address
- Login Modal
    - Email and password form
- Logged in Page/Dashboard
     - Upcoming Appointments if any
        - In the upcoming appointment a button for more details
    - Call to action Button to Schedule Appointment
- Profile
    - Display Information
    - Edit/update Information
    - Add/remove vehicles
- Add Vehicle Page/form
    - Form with Vehicle Maker
    - Vehicle Year
    - Vehicle Model
    - Vehicle Type
-Appointment Details page
    - Display information about appointment
    - Reschedule Button
    - Cancel Button
- Schedule Appointment Process
    - First will display Service Options and a next button
    - Then the next page will display a drop-down list of their vehicles to choose which vehicle is the service being performed on.
        - At the bottom of the dropdown list show an option to add another vehicle
        - Will take you to the Add vehicle page/form
    - Add an option for one more vehicle to the service
    - Next page will show a calendar with available dates
        - When click on the day user want appointment it will expand to see the available hours
        - Will display available hours with green blocks
        - User selects the hours clicking on the blocks
        - Next button at the bottom
    - Next page will be a review of the information
        - Add edit buttons on the side of editable information
        - When clicked it will take the user back to those pages.
        - Confirm button at the bottom
    - The next page will display 3rd party payment method options.
        - More on this later will skip this step at first
    - Then click finish to schedule appointment(user should receive email with appointment details)
- Confirmation page
    - Display all info about appointment
    - Will have a home and appointments redirecting buttons

***

### Back end:
#### Controllers:
- Users Route
    - Create Admin
    - Create user(sign-up)
    - Authenticate(login)
    - Get User
    - Update User(info)
    - Delete User(account)
- Services Route(CRUD) ADMIN Only
    - Add/create service 
    - Get all Services
    - Get specific service
    - Update Service
    - Delete Service
- Vehicles Routes(CRUD)
    - Add Vehicle 
    - Get All User’s vehicles
    - Get Specific vehicle
    - Update Vehicle(info)
    - Delete Vehicle
- Appointments Route(CRUD)
    - Create Appointment
    - Get All User Appointments
    - Get Specific Appointment info
    - Update Appointment
    - Delete/Cancel Appointment

#### Models:
- User:
    - UUID Primary Key Default:UUIDV4
    - Name string not null
    - Email unique string not null
    - Password string not null
    -Name String not null
    - Address String not null
    - City String not null
    - State Enum not null
    - Country Enum not null
- Service:
    - UUID Primary Key Default:UUIDV4
    - service_name string not null
    - service_price integer not null
    - Service_duration integer(minutes) not null
- vehicle :
    - Uuid Primary Key Default:UUIDV4
    - User_id foreign key not null
    - Make string not null
    - Model string not null
    - Year INT not null
    - Type enum ['sedan', 'non-sedan']
- Appointment: 
    - UUID primary Key Default:UUIDV4
    - User_id not null Foreign key
    - Date date_only  not null
    - Time time not null
- service_appointment
    - id UUID default UUIDV4 Primary Key
    - service_id UUID not null Foreign Key
    - appointment_id UUID not null Foreign Key
- vehicle_appointment 
    - id UUID default UUIDV4 Primary Key
    - vehicle_id UUID not null Foreign Key
    - appointment_id UUID not null Foreign Key
