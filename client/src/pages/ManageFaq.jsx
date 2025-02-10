import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import styles from "../styles/ProfileStyles";
import { styles1 } from "../styles/DashBoardStyles";

const faqCategories = [
  "Account & Registration",
  "Ordering",
  "Delivery",
  "Payments",
  "Returns & Refunds",
  "Account Issues",
  "Restaurant & Food Queries",
  "Technical Support",
  "Promotions & Discounts",
  "General Inquiries",
];

const sampleQuestions = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    question: "Why is Lorem Ipsum used?",
    answer: "It provides a more readable text for layout designs.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
  {
    question: "Lorem Ipsum is simply dummy text of the printing industry.",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
  },
];

const ManageFaq = () => {
  const [selectedCategory, setSelectedCategory] = useState(faqCategories[0]);

  return (
    <Box display="flex" gap={2} marginTop={10}>
      {/* Left Sidebar (FAQ Categories) */}
      <Box width="40%" bgcolor="#fff" p={2} sx={styles1.ScrollBar5}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold" sx={styles.headerText}>
            FAQ
          </Typography>
          <Button variant="contained" color="warning">
            + Add
          </Button>
        </Box>
        <List>
          {faqCategories.map((category, index) => (
            <ListItemButton
              key={index}
              selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                borderRadius: 3,
                border: "1px solid #E3E3E3",
                mb: 1,
                "&.Mui-selected": { backgroundColor: "#ff9800", color: "#fff" },
              }}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Right Section (Questions & Answers) */}
      <Box flexGrow={1} bgcolor="#fff" p={2} borderRadius={3} border={"1px solid #E3E3E3"} sx={styles1.ScrollBar5}>
        

        {sampleQuestions.map((faq, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Question
            </Typography>
            <TextField
              fullWidth
              value={faq.question}
              size="small"
              sx={{ my: 1,border:"1px solid #E3E3E3" }}
              disabled
            />
            <Typography variant="subtitle1" fontWeight="bold">
              Answer
            </Typography>
            <TextField
              fullWidth
              value={faq.answer}
              variant="outlined"
              size="small"
              sx={{ my: 1 }}
              disabled
            />
          </Paper>
        ))}

        {/* Add Button at Bottom */}
        <Button fullWidth variant="contained" color="warning">
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ManageFaq;
