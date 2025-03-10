import Link from "next/link";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CPRG 306: Web Development 2 - Assignments</h1>
      <div style={styles.linkContainer}>
        <p style={styles.linkText}>
          <Link href="/week-2" style={styles.link}>
            Week 2 Assignment
          </Link>
        </p>
        <p style={styles.linkText}>
          <Link href="/week-3" style={styles.link}>
            Week 3 Assignment
          </Link>
        </p>
        <p style={styles.linkText}>
          <Link href="/week-4" style={styles.link}>
            Week 4 Assignment
          </Link>
        </p>
        <p style={styles.linkText}>
          <Link href="/week-5" style={styles.link}>
            Week 5 Assignment
          </Link>
        </p>
        <p style={styles.linkText}>
          <Link href="/week-6" style={styles.link}>
            Week 6 Assignment
          </Link>
        </p>
        <p style={styles.linkText}>
          <Link href="/week-7" style={styles.link}>
            Week 7 Assignment
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(to right, #6a11cb, #2575fc)", // Gradient background
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff", 
    marginBottom: "30px",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linkText: {
    marginBottom: "15px",
  },
  link: {
    fontSize: "18px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "500",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#333333", 
    transition: "all 0.3s ease",
  },
};

export default HomePage;
