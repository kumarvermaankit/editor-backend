#include<bits/stdc++.h> 
using namespace std; 
main() { 
    string s = "Viet Nam"; 
    transform(s.begin(), s.end(), s.begin(), ::tolower); //lowercase
    cout << s << endl; 
}