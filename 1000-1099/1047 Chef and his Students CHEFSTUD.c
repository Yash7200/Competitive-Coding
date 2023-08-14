//Problem Simplification:
    //n --> no. of students/length of string
    //* --> student studying
    //> --> student talking to right
    //< --> student talking to left
    //*><* : valid
    //>< : valid
    //< : invalid
    //>>< : invalid
    //when students saw teacher coming & who were talking get afraid
    //left turned to right < becomes >
    //right turned to left > becomes <
    //if any pair is caught talking gets punished
    //print punished pairs
//Logic:
    //only talking students will change their direction
    //after changing direction if someone is talking then pair is get punished
    //We're supposed to print no. of pairs
    //if 1st student is '<' and another is '>' then it would be a valid pair after change.
#include <stdio.h>
#include <string.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int cnt=0;
	    char s[100000];
	    scanf("%s",s);
	    for(int j=0;j<strlen(s);j++)
	    {
	        if(s[j]=='<' && s[j+1]=='>')
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}