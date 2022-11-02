import java.util.Scanner;

class User {
    Scanner sc = new Scanner(System.in);
    private final String accountName;
    private final String accountPassword;

    String studentName;
    int english;
    int math;
    int history;
    int chemical;
    int computer;
    double sum;
    String comment;
    char letterGrade;
    double gpaGrade;

    public User() {
        this.accountName = "";
        this.accountPassword = "";
    }

    public User(String accountName, String accountPassword) {
        this.accountName = accountName;
        this.accountPassword = accountPassword;
    }

    public String getAccountName() {
        return this.accountName;
    }

    public String getAccountPassword() {
        return this.accountPassword;
    }

    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }

    public void userMenu() {
        String userName;
        String userPassword;
        char option;

        System.out.println("========== TW School Management System ==========");
        do {
            System.out.print("Please enter user name: ");
            userName = sc.next();
            if (!userName.equals(accountName)) {
                System.out.println("Please enter the correct user name!");
            }
        } while (!userName.equals(accountName));

        do {
            System.out.print("Please enter password: ");
            userPassword = sc.next();
            if (!userPassword.equals(accountPassword)) {
                System.out.println("Please enter the correct password!");
            }
        } while (!userPassword.equals(accountPassword));
        System.out.println("=================================================");
        System.out.println("Welcome, " + this.accountName + "!");

        do {
            System.out.println("=================================================");
            System.out.println("1. Enter the grades");
            System.out.println("2. List the Average Score and GPA");
            System.out.println("3. Leave your comment");
            System.out.println("4. Simple Survey");
            System.out.println("5. Exit");

            System.out.print("Please select a choice: ");
            option = sc.next().charAt(0);
            System.out.println();

            switch (option) {
                case '1':
                    System.out.println("=================================================");
                    System.out.println("Please enter student's name: ");
                    studentName = sc.next();
                    System.out.println("Please enter the scores: ");
                    System.out.print("English: ");
                    english = sc.nextInt();
                    System.out.print("Math: ");
                    math = sc.nextInt();
                    System.out.print("History: ");
                    history = sc.nextInt();
                    System.out.print("Chemical: ");
                    chemical = sc.nextInt();
                    System.out.print("Computer: ");
                    computer = sc.nextInt();
                    System.out.println("=================================================");
                    System.out.println(studentName + "'s score are: ");
                    System.out.println("English: " + english + "     " + "Math: " + math + "    " + "History: " + history);
                    System.out.println("Chemical: " + chemical + "     " + "Computer: " + computer);
                    sum = (english + math + chemical + history + computer) / 5;
                    System.out.println("The average is " + sum);
                    break;

                case '2':
                    System.out.println("=================================================");
                    System.out.println("Please enter student's name: ");
                    studentName = sc.next();
                    System.out.println(studentName + "'s average score is: " + sum);
                    gpa(sum);
                    break;

                case '3':
                    System.out.println("=================================================");
                    System.out.println("Please leave comment: ");
                    sc.nextLine();
                    comment = sc.nextLine();
                    System.out.println("Thank you for leaving comment.");
                    System.out.println("***************** Your comment *****************");
                    System.out.println(" " + comment);
                    break;

                case '4':
                    survey();
                    break;

                case '5':
                    System.out.println("=================================================");
                    sc.close();
                    System.out.println("Thank you for using this application.");
                    System.out.println("See you next time.");
                    break;

                default:
                    System.out.println("=================================================");
                    System.out.println("Invalid Option, Please enter a valid input");
            }

        } while (option != '5');

    }

    public void gpa(double sum) {
        if (90 <= sum && sum <= 100) {
            letterGrade = 'A';
            gpaGrade = 4.0;
            System.out.println(studentName + " gets " + letterGrade + ", the GPA is " + gpaGrade);
        } else if (80 <= sum && sum < 90) {
            letterGrade = 'B';
            gpaGrade = 3.0;
            System.out.println(studentName + " gets " + letterGrade + ", the GPA is " + gpaGrade);
        } else if (70 <= sum && sum < 80) {
            letterGrade = 'C';
            gpaGrade = 2.0;
            System.out.println(studentName + " gets " + letterGrade + ", the GPA is " + gpaGrade);
        } else if (60 <= sum && sum < 70) {
            letterGrade = 'D';
            gpaGrade = 1.0;
            System.out.println(studentName + " gets " + letterGrade + ", the GPA is " + gpaGrade);
        } else if (0 <= sum && sum < 60) {
            letterGrade = 'F';
            gpaGrade = 0.0;
            System.out.println(studentName + " gets " + letterGrade + ", the GPA is " + gpaGrade);
            System.out.println(studentName + " is failed.");
        }
    }

    public void survey() {
        String gender;
        String country;
        int age;
        String subject;
        String hobby;
        String marital;
        System.out.println("=================================================");
        do {
            System.out.println("Are you a man or woman? (Please enter Man / Woman)");
            gender = sc.next();
            if (!gender.equals("Man") && !gender.equals("Woman") ) {
                System.out.println("Invalid Option, Please enter a valid input");
            }
        } while (!gender.equals("Man") && !gender.equals("Woman"));

        System.out.println("Where are you from?");
        country = sc.next();

        System.out.println("How old are you?");
        age = sc.nextInt();

        do {
            System.out.println("Are you married? (Please enter yes or no)");
            marital = sc.next();
            if (marital.equals("yes")) {
                marital = "Married";
            } else if (marital.equals("no")) {
                marital = "Single";
            } else {
                System.out.println("Invalid Option, Please enter a valid input");
            }
        }while (!marital.equals("Married") && !marital.equals("Single"));

        System.out.println("What are you teaching?");
        subject = sc.next();

        System.out.println("What's your hobby?");
        hobby = sc.next();

        System.out.println("Gender: " + gender + "     Country: "+ country + "     Age: " + age);
        System.out.println("Marital: " + marital + "     Teaching: "+ subject + "     Hobby: "+ hobby);
    }
}
