// n --> no. of faces chef is tossing a dies with 'n' faces [[twice]].

// to win chef needs:
// a --> no. on 1st toss
// b --> no. on 2nd toss

// for probability: no. received specific times/total observations

// meanings:
// no. received specific times ==> how many times we got 'a' or 'b'
// total observations ==> variable n

// we need to find probability of both numbers separately then multiplication of both
// we can get same number twice to win so inspite of 'if-else' use only 'if-if'
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,a,b;
	    scanf("%d %d %d",&n,&a,&b);
	    int c[n];
	    float ca=0,cb=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&c[j]);
	        if(c[j]==a)
	        {
	            ca++;
	        }
	        if(c[j]==b)
	        {
	            cb++;
	        }
	    }
	    printf("%f\n",( (ca/n)*(cb/n) ));
	}
	return 0;
}