class HealthStatusManager {
    constructor(totalStudents) {
      this.totalStudents = totalStudents;
      this.sickStudents = 0;
      this.recoveredStudents = 0;
    }
  
    // Update the number of sick students
    updateSickStudents(sickStudents) {
      this.sickStudents = sickStudents;
    }
  
    // Update the number of recovered students
    updateRecoveredStudents(recoveredStudents) {
      this.recoveredStudents = recoveredStudents;
    }
  
    // Calculate the percentage of sick students
    getSickPercentage() {
      return (this.sickStudents / this.totalStudents) * 100;
    }
  
    // Calculate the percentage of recovered students
    getRecoveredPercentage() {
      return (this.recoveredStudents / this.totalStudents) * 100;
    }
  
    // Get the total number of students
    getTotalStudents() {
      return this.totalStudents;
    }
  
    // Get the current number of sick students
    getSickStudents() {
      return this.sickStudents;
    }
  
    // Get the current number of recovered students
    getRecoveredStudents() {
      return this.recoveredStudents;
    }
  }
  