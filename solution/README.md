# Notes about my implementation

So far I implemented the components for name input and validation, location drop down, and a table for the displaying added name/location pairs. I use Tailwind for styles through CDN. In production Tailwind should be added as a dev dependency, but I need more time for adding it to the existing project. The reason for using Tailwind is for responsive UI, which needs more effort in this project as well.

The current UI layout is close to ```./mock.png```. 

## App.js

Defines the UI layout, and uses states for name input and selection which are passed to NameInput and LocationSelect components. The added name/location pairs are stored in another array state, which is passed to AccountList for displaying in a table.

Name validation is done here by calling ```isNameValid``` API and checking if the same name exists in the array state. The current implementation does not block adding invalid names to the list though. This is straightforward to implement if the requirement exists.

## Components

### NameInput.js

Accepts name input.

### LocationSelect.js

Provides location selection. The options are from the API ```getLocations```.

### AccountList.js

Displays the added name/location pairs in a table.
