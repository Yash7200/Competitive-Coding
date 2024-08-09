// Problem Simplification:
    // Check if pronunciation is easy or not
    // Pronunciation is difficult if it has 4 or more than 4 consecutive consonants

// Variables:
    // t --> no. of test cases
    // n --> size of input string
    // cnt --> no. of consecutive consonants

// Logic:
    // We need to check if it has 4 or more than 4 consecutive consonants
    // After string input we'll check for exactly 4 consecutive consonants character by character using for loop
    // if any character will be a, e, i, o, u then our 'cnt' variable will become 0 otherwise it'll get increased & when it becomes 4 loop will get terminated
    // After loop termination we need to check for value of cnt variable. If it is 4 or more than 4 we'll print 'no' otherwise 'yes'


#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,cnt=0;
	    scanf("%d",&n);
	    char s[n];
	    scanf("%s",s);
	    for(int j=0;j<n;j++)
	    {
	        if(s[j]=='a'||s[j]=='e'||s[j]=='i'||s[j]=='o'||s[j]=='u')
	        {
	            cnt=0;
	        }
	        else
	        {
	            cnt++;
	            if(cnt==4)
	            {
	                break;
	            }
	        }
	    }
	    if(cnt>=4)
	    {
	        printf("NO\n");
	    }
	    else
	    {
	        printf("YES\n");
	    }
	}
	return 0;
}