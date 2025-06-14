//Alice   --> no. multiple of 7 & even
//Bob     --> no. multiple of 9 & odd
//Charlie --> all disliked by Alice & Bob

//Alice, Bob, Charlie found number A

//No int will be liked by both Alice and Bob
#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if( ((n%7)==0) && ((n%2)==0) )
	    {
	        printf("Alice\n");
	    }
	    else if( ((n%9)==0) && ((n%2)!=0) )
	    {
	        printf("Bob\n");
	    }
	    else
	    {
	        printf("Charlie\n");
	    }
	}
	return 0;
}