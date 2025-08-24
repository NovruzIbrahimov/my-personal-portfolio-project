import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Projects.css";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import furnitureImg from "../../assets/images/furniture.png";
import bookImg from "../../assets/images/book.png";
import portfolioImg from "../../assets/images/portfolio.png";
import Loading from "../../components/Loading/Loading";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const projectData = [
    {
      id: 1,
      title: "Furniture Ecommerce",
      description: t("projects.description-one"),
      image: furnitureImg,
      live: "https://example.com",
      github:
        "https://github.com/NovruzIbrahimov/Furniture_ecommerce_project.git",
    },
    {
      id: 2,
      title: "Book Ecommerce",
      description: t("projects.description-two"),
      image: bookImg,
      live: "#",
      github: "https://github.com/NovruzIbrahimov/MyBook-Ecommerce.git",
    },
    {
      id: 3,
      title: "Portfolio",
      description: t("projects.description-three"),
      image: portfolioImg,
      live: "#",
      github: "https://github.com/NovruzIbrahimov/My-Portfolio.git",
    },
  ];

  const handleOpenModal = (project) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setShowModal(true);
      setLoading(false);
    }, 500);
  };

  const handleCloseModal = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedProject(null);
      setShowModal(false);
      setLoading(false);
    }, 500);
  };

  const handleButtonClick = (url) => {
    setLoading(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 500);
  };

  if (loading) return <Loading />;

  return (
    <div className="projects container py-5">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("projects.projects")}
      </motion.h2>

      <div className="row">
        {projectData.map((project, index) => (
          <motion.div
            className="col-md-6 col-lg-4 mb-4"
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div
              className="project-card"
              onClick={() => handleOpenModal(project)}
            >
              <img src={project.image} alt={project.title} />
              <div className="card-body">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <span className="see-more">{t("projects.see-more")} →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="img-fluid rounded mb-3"
              />
              <p>{selectedProject.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => handleButtonClick(selectedProject.live)}
              >
                {t("projects.modal-preview")}
              </Button>
              <Button
                variant="dark"
                onClick={() => handleButtonClick(selectedProject.github)}
              >
                GitHub
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Projects;
