import React, { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";

// This can be moved out into a data.js file just here for a quick prototype
// Also once moving into the data.js file we can then use javascript functions to push or pop
// Alternatively we can use something JSON server to accomplish what we are doing here
// The major difference is we would have the full CRUD functionality 
const emails = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    dept: "Engineering",
    hireDate: "2021-01-01",
    role: "frontend",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    dept: "HR",
    hireDate: "2021-02-15",
    role: "backend",
  },
  {
    id: 3,
    name: "Jim Jones",
    email: "jimjones@example.com",
    dept: "Marketing",
    hireDate: "2021-03-10",
    role: "frontend",
  },
  {
    id: 4,
    name: "Mike Perry",
    email: "mikeperry@example.com",
    dept: "Finance",
    hireDate: "2021-04-05",
    role: "backend",
  },
  {
    id: 5,
    name: "Holy Camole",
    email: "holycamole@example.com",
    dept: "Engineering",
    hireDate: "2021-05-20",
    role: "frontend",
  },
  {
    id: 6,
    name: "No Way Jose",
    email: "nowayjose@example.com",
    dept: "HR",
    hireDate: "2021-06-25",
    role: "backend",
  },
  {
    id: 7,
    name: "Coffee Carlson",
    email: "coffecarlson@example.com",
    dept: "Marketing",
    hireDate: "2021-07-30",
    role: "frontend",
  },
  {
    id: 8,
    name: "Java Joe",
    email: "javajoe@example.com",
    dept: "Finance",
    hireDate: "2021-08-12",
    role: "backend",
  },
  {
    id: 9,
    name: "Espress Emily",
    email: "espressoemily@example.com",
    dept: "Engineering",
    hireDate: "2021-09-18",
    role: "frontend",
  },
  {
    id: 10,
    name: "Cuban Coffelito",
    email: "cubancoffelito@example.com",
    dept: "HR",
    hireDate: "2021-10-22",
    role: "backend",
  },
];

const MainForm = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [action, setAction] = useState("");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const transferButtonRefs = useRef({});
  const deleteButtonRefs = useRef({});

  const handleClickOpen = (action, user) => {
    setSelectedEmail(action === "transfer" ? selectedEmail : "");
    setAction(action);

    if (action === "delete") {
      setConfirmationOpen(true);
    }

    // Set focus on the corresponding button
    if (user && action === "transfer" && transferButtonRefs.current[user.id]) {
      transferButtonRefs.current[user.id].focus();
    } else if (
      user &&
      action === "delete" &&
      deleteButtonRefs.current[user.id]
    ) {
      deleteButtonRefs.current[user.id].focus();
    }
  };

  const handleClose = () => {
    setSelectedEmail("");
    setAction("");
    setMenuAnchorEl(null);
    setConfirmationOpen(false);

    // Set focus on the corresponding button
    if (action === "transfer" && transferButtonRefs.current[selectedEmail]) {
      transferButtonRefs.current[selectedEmail].focus();
    } else if (action === "delete" && deleteButtonRefs.current[selectedEmail]) {
      deleteButtonRefs.current[selectedEmail].focus();
    }
  };

  // The updated emails isn't doing anything just here for a demo
  // Only is used to allow us to select an email for a user
  const handleAction = () => {
    if (action === "delete") {
      // Perform the delete action here
      const deletedUser = emails.find((email) => email.id === selectedEmail);
      const updatedEmails = emails.filter(
        (email) => email.id !== selectedEmail
      );
      setToastMessage(
        `User "${deletedUser.name}" (${deletedUser.email}) deleted`
      );
    } else if (action === "transfer") {
      // Implement the transfer logic here
      const transferredUser = emails.find(
        (email) => email.id === selectedEmail
      );
      setToastMessage(
        `Project transferred for user "${transferredUser.name}" (${transferredUser.email})`
      );
    }

    setAction("");
    setConfirmationOpen(false);
    setMenuAnchorEl(null);
    setToastOpen(true);
  };
  const handleCloseToast = () => {
    setToastOpen(false);
  };

  return (
    <div>
      {/* Transfer dialog */}
      <Dialog
        open={action === "transfer"}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Select an Email to Transfer
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select a user email to transfer the project.
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="email-select-label">Email</InputLabel>
            <Select
              labelId="email-select-label"
              id="email-select"
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
            >
              {emails.map((email) => (
                <MenuItem key={email.id} value={email.id}>
                  {email.name} - {email.email}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAction}
            color="primary"
            disabled={!selectedEmail}
          >
            Transfer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete confirmation dialog */}
      <Dialog
        open={confirmationOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the user?
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="email-select-label">Email</InputLabel>
            <Select
              labelId="email-select-label"
              id="email-select"
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
            >
              {emails.map((email) => (
                <MenuItem key={email.id} value={email.id}>
                  {email.name} - {email.email}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAction}
            color="primary"
            disabled={!selectedEmail}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Table component */}
      <TableContainer aria-label="admin user table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Date of Hire</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.map((user) => (
              <TableRow
                key={user.id}
                tabIndex={0} // Add tabindex to make the row focusable
                onClick={(e) => handleClickOpen("transfer", user)}
              >
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.dept}</TableCell>
                <TableCell>{user.hireDate}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={(e) => handleClickOpen("transfer", user)}
                    aria-label="transfer user projects"
                  >
                    <MoreVertIcon
                      aria-label="transfer user role icon"
                      aria-haspopup="true"
                      aria-controls={`actions-menu-${user.id}`}
                      ref={(button) => {
                        transferButtonRefs.current[user.id] = button;
                      }}
                    />
                  </Button>
                  <Button
                    onClick={(e) => handleClickOpen("delete", user)}
                    aria-label="delete user button"
                  >
                    <DeleteIcon
                      aria-label="delete user from company"
                      aria-haspopup="true"
                      aria-controls={`actions-menu-${user.id}`}
                      ref={(button) => {
                        deleteButtonRefs.current[user.id] = button;
                      }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Toast notification */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={handleCloseToast}
      >
        <Alert onClose={handleCloseToast} severity="success">
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MainForm;
