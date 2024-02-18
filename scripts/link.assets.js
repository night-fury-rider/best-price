console.log(`%%%%%%%%%%%%%%%%%%%% Assets Linking Started %%%%%%%%%%%%%%%%%%%%`);

const fs = require('fs');

const linkAssetsUnderDirectory = (sourceDirectory, destinationDirectory) => {
  try {
    fs.cpSync(sourceDirectory, destinationDirectory, {recursive: true});
  } catch (err) {
    console.log(
      `%%%%%%%%%%%%%%%%%%%% Assets Linking Failed due to ${err} %%%%%%%%%%%%%%%%%%%%`,
    );
  }

  console.log(
    `%%%%%%%%%%%%%%%%%%%% Assets Linking Completed Successfully %%%%%%%%%%%%%%%%%%%%`,
  );
};

linkAssetsUnderDirectory('assets', 'android/app/src/main/assets');
