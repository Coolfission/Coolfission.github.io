#include <fstream>
using std::fstream;

int main(int argc, char *argv[]) {
    fstream file;
    file.open("write.txt", fstream::out);
    file << "Hello, this is a test to create a text file and write in it.";
    file.close();
}


// #include <iostream>
// using namespace std;

// /*Compiling command
// c++ index.cpp -o index.exe
// */

// int main () {
// 	int x;
// 	std::cout << "Write a number?";
//   	std::cin >> x;
//   	std::cout << "Your number is: " << x;
//  	return 0;
// }