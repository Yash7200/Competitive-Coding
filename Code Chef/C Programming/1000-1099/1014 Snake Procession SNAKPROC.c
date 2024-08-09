// chef marks 'H' when he sees head of snake & 'T' when he sees tails of snake
// n --> string length
// hs --> h in sequence

// Logic:
//If '.' comes we'll continue iteration. 
//When 'H' comes ,hs counting variable will be increased. 
// If 'H' & 'T' are coming in a right order then hs will be reset to 0.
//We have a condition that if 'T' comes & hs=1 then it'll reset hs otherwise loop will get stopped after all if j is equal to n & hs is 0 then it will considered as valid counting

#include <stdio.h>
#include <string.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,j,hs=0;
	    scanf("%d",&n);
	    char s[n];
	    scanf("%s",s);
	    for(j=0;j<n;j++)
	    {
	        if(s[j]=='.')
	        {
	            continue;
	        }
	        else if(s[j]=='H')
	        {
	            hs++;
	        }
	        else if(s[j]=='T' && hs==1)
	        {
	            hs=0;
	        }
	        else
	        {
	            break;
	        }
	    }
	    if(j==n && hs==0)
	    {
	        printf("Valid\n");
	    }
	    else
	    {
	        printf("Invalid\n");
	    }
	}
	return 0;
}