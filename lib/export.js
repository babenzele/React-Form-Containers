import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  "react": "^15.2.1",
  "formsy-react": "^0.18.1",
  "formsy-react-components": "^0.8.1",
  "react-bootstrap": "^0.29.5"
  // 'rebass': '^0.2.4',
});

import NewDocument from "./NewDocument.jsx";
import EditDocument from "./EditDocument.jsx";

export default {NewDocument, EditDocument};
